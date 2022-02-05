import { Tables } from './../@const/tables';
import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiFiles } from '../utiles/api-files.decorator';
import { ParseFile } from '../utiles/parse-file.pipe';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { InjectKnex, Knex } from 'nestjs-knex';
import * as nodeUuid from 'node-uuid';
import { Response } from 'express';

const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf|xls|xlsx)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

const editFileName = (req, file, cb) => {
  const randomName = nodeUuid.v4();
  return cb(null, `${randomName}${extname(file.originalname)}`);
  // return cb(null, `${randomName}`);
};

@Controller('document')
@ApiTags('document')
export class DocumentController {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  @Post('uploads')
  @ApiFiles('files', true, 10, {
    storage: diskStorage({
      destination: './uploads',
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  })
  async uploadFiles(
    @UploadedFiles(ParseFile) files: Array<Express.Multer.File>,
  ) {
    try {
      if (files.length > 0) {
        const response = {
          originalname: files[0].originalname,
          filename: `${files[0].filename}`,
          uiid: `${extname(files[0].originalname)}`,
          path: files[0].path,
          mimetype: files[0].mimetype,
        };
        const document = await this.knex(Tables.DOCUMENTS)
          .insert(response)
          .returning('*');
        return {
          success: true,
          data: document,
        };
      }
      return {
        success: false,
        data: null,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        data: error,
      };
    }
  }

  @Post('uploadFiles')
  @ApiFiles()
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files);
  }

  @Get('allfiles')
  async getAllFiles() {
    try {
      const files = await this.knex(Tables.DOCUMENTS).returning('*');
      return files;
    } catch (error) {
      return error;
    }
  }

  @Get('/getfile/:id')
  async getProduct(@Param('id') id, @Res() res: Response) {
    try {
      if (id) {
        const file = await this.knex(Tables.DOCUMENTS).where({ filename: id });
        const filename = `${file[0].filename}${extname(file[0].originalname)}`;
        console.log(filename);
        return file.length > 0
          ? res.sendFile(filename, {
              root: './uploads',
            })
          : res.send(null);
      }
      res.send(null);
    } catch (error) {
      res.send(error);
    }
  }
}

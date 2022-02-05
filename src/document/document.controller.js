"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.DocumentController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var api_files_decorator_1 = require("../utiles/api-files.decorator");
var parse_file_pipe_1 = require("../utiles/parse-file.pipe");
var multer_1 = require("multer");
var path_1 = require("path");
var nestjs_knex_1 = require("nestjs-knex");
var DocumentController = /** @class */ (function () {
    function DocumentController(knex) {
        this.knex = knex;
    }
    DocumentController.prototype.uploadFiles = function (files) {
        if (files.length > 0) {
            var response = {
                originalname: files[0].originalname,
                filename: files[0].filename,
                destination: files[0].destination,
                path: files[0].path,
                mimetype: files[0].mimetype
            };
            this.knex();
            return response;
        }
        return null;
    };
    DocumentController.prototype.uploadMultipleFiles = function (files) {
        console.log(files);
    };
    DocumentController.prototype.getProduct = function (id) {
        return id;
    };
    __decorate([
        (0, common_1.Post)('uploads'),
        (0, api_files_decorator_1.ApiFiles)('files', true, 10, {
            storage: (0, multer_1.diskStorage)({
                destination: './uploads',
                filename: function (req, file, cb) {
                    var randomName = Array(32)
                        .fill(null)
                        .map(function () { return Math.round(Math.random() * 16).toString(16); })
                        .join('');
                    return cb(null, "" + randomName + (0, path_1.extname)(file.originalname));
                }
            })
        }),
        __param(0, (0, common_1.UploadedFiles)(parse_file_pipe_1.ParseFile))
    ], DocumentController.prototype, "uploadFiles");
    __decorate([
        (0, common_1.Post)('uploadFiles'),
        (0, api_files_decorator_1.ApiFiles)(),
        __param(0, (0, common_1.UploadedFiles)())
    ], DocumentController.prototype, "uploadMultipleFiles");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], DocumentController.prototype, "getProduct");
    DocumentController = __decorate([
        (0, common_1.Controller)('document'),
        (0, swagger_1.ApiTags)('document'),
        __param(0, (0, nestjs_knex_1.InjectKnex)())
    ], DocumentController);
    return DocumentController;
}());
exports.DocumentController = DocumentController;

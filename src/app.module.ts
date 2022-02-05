import { KnexModule } from 'nestjs-knex';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { DocumentModule } from './document/document.module';
import { DB_HOST, DB_NAME, DB_PASS, DB_USER } from '@environments';

@Module({
  imports: [
    DocumentModule,
    KnexModule.forRoot({
      config: {
        client: 'postgresql',
        connection: {
          host: 'localhost',
          database: 'documents',
          user: 'postgres',
          password: 'Admin123',
          charset: 'utf8',
        },
      },
    }),
    MulterModule.register({
      dest: './telechargements',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

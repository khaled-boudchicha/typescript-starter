'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.AppModule = void 0;
var nestjs_knex_1 = require('nestjs-knex');
var common_1 = require('@nestjs/common');
var app_controller_1 = require('./app.controller');
var app_service_1 = require('./app.service');
var platform_express_1 = require('@nestjs/platform-express');
var document_module_1 = require('./document/document.module');
var _environments_1 = require('@environments');
var AppModule = /** @class */ (function () {
  function AppModule() {}
  AppModule = __decorate(
    [
      (0, common_1.Module)({
        imports: [
          document_module_1.DocumentModule,
          nestjs_knex_1.KnexModule.forRoot({
            config: {
              client: 'postgresql',
              connection: {
                host: _environments_1.DB_HOST,
                database: _environments_1.DB_NAME,
                user: _environments_1.DB_USER,
                password: _environments_1.DB_PASS,
                charset: 'utf8',
              },
            },
          }),
          platform_express_1.MulterModule.register({
            dest: './telechargements',
          }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
      }),
    ],
    AppModule,
  );
  return AppModule;
})();
exports.AppModule = AppModule;

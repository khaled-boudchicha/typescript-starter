'use strict';
exports.__esModule = true;
exports.DB_PORT =
  exports.DB_HOST =
  exports.DB_PASS =
  exports.DB_USER =
  exports.DB_NAME =
  exports.BCRYPT_SALT =
  exports.EMAIL_TOKEN_SECRET =
  exports.EMAIL_TOKEN =
  exports.RESETPASS_TOKEN_SECRET =
  exports.RESETPASS_TOKEN =
  exports.REFRESH_TOKEN_SECRET =
  exports.REFRESH_TOKEN =
  exports.ACCESS_TOKEN_SECRET =
  exports.ACCESS_TOKEN =
  exports.AUDIENCE =
  exports.ISSUER =
  exports.STATIC =
  exports.GRAPHQL_DEPTH_LIMIT =
  exports.RATE_LIMIT_MAX =
  exports.FE_URL =
  exports.END_POINT =
  exports.PORT =
  exports.DOMAIN =
  exports.PRIMARY_COLOR =
  exports.AUTHOR =
  exports.NODE_ENV =
    void 0;
var dotenv = require('dotenv');
dotenv.config();
// environment
var NODE_ENV = process.env.NODE_ENV || 'development';
exports.NODE_ENV = NODE_ENV;
// author
var AUTHOR = process.env.AUTHOR || 'Nsis';
exports.AUTHOR = AUTHOR;
// application
var PRIMARY_COLOR = process.env.PRIMARY_COLOR || '#87e8de';
exports.PRIMARY_COLOR = PRIMARY_COLOR;
var DOMAIN = process.env.DOMAIN || 'localhost';
exports.DOMAIN = DOMAIN;
var PORT = +process.env.PORT || 14047;
exports.PORT = PORT;
var END_POINT = process.env.END_POINT || 'graphql';
exports.END_POINT = END_POINT;
var FE_URL = process.env.FE_URL || 'xxx';
exports.FE_URL = FE_URL;
var RATE_LIMIT_MAX = +process.env.RATE_LIMIT_MAX || 10000;
exports.RATE_LIMIT_MAX = RATE_LIMIT_MAX;
var GRAPHQL_DEPTH_LIMIT = +process.env.GRAPHQL_DEPTH_LIMIT || 3;
exports.GRAPHQL_DEPTH_LIMIT = GRAPHQL_DEPTH_LIMIT;
// postgres
var DB_NAME = process.env.DB_NAME || 'documents';
exports.DB_NAME = DB_NAME;
var DB_USER = process.env.DB_USER || 'postgres';
exports.DB_USER = DB_USER;
var DB_PASS = process.env.DB_PASS || 'Admin123';
exports.DB_PASS = DB_PASS;
var DB_HOST = process.env.DB_HOST || 'localhost';
exports.DB_HOST = DB_HOST;
var DB_PORT = +process.env.DB_PORT || 5432;
exports.DB_PORT = DB_PORT;
// static
var STATIC = process.env.STATIC || 'static';
exports.STATIC = STATIC;
// jsonwebtoken
var ISSUER = process.env.ISSUER || 'Nsis';
exports.ISSUER = ISSUER;
var AUDIENCE = process.env.AUDIENCE || 'http://chnirt.github.io';
exports.AUDIENCE = AUDIENCE;
var ACCESS_TOKEN = process.env.ACCESS_TOKEN || 'access-token';
exports.ACCESS_TOKEN = ACCESS_TOKEN;
var ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'access-token-key';
exports.ACCESS_TOKEN_SECRET = ACCESS_TOKEN_SECRET;
var REFRESH_TOKEN = process.env.REFRESH_TOKEN || 'refresh-token';
exports.REFRESH_TOKEN = REFRESH_TOKEN;
var REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key';
exports.REFRESH_TOKEN_SECRET = REFRESH_TOKEN_SECRET;
var EMAIL_TOKEN = process.env.EMAIL_TOKEN || 'email-token';
exports.EMAIL_TOKEN = EMAIL_TOKEN;
var EMAIL_TOKEN_SECRET = process.env.EMAIL_TOKEN_SECRET || 'email-token-key';
exports.EMAIL_TOKEN_SECRET = EMAIL_TOKEN_SECRET;
var RESETPASS_TOKEN = process.env.RESETPASS_TOKEN || 'resetpass-token';
exports.RESETPASS_TOKEN = RESETPASS_TOKEN;
var RESETPASS_TOKEN_SECRET =
  process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key';
exports.RESETPASS_TOKEN_SECRET = RESETPASS_TOKEN_SECRET;
// bcrypt
var BCRYPT_SALT = +process.env.BCRYPT_SALT || 10;
exports.BCRYPT_SALT = BCRYPT_SALT;

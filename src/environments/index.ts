import * as dotenv from 'dotenv';
dotenv.config();

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development';

// author
const AUTHOR: string = process.env.AUTHOR || 'Nsis';

// application
const PRIMARY_COLOR: string = process.env.PRIMARY_COLOR || '#87e8de';
const DOMAIN: string = process.env.DOMAIN || 'localhost';
const PORT: number = +process.env.PORT || 14047;
const END_POINT: string = process.env.END_POINT || 'graphql';
const FE_URL: string = process.env.FE_URL || 'xxx';
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000;
const GRAPHQL_DEPTH_LIMIT: number = +process.env.GRAPHQL_DEPTH_LIMIT || 3;

// postgres
const DB_NAME: string = process.env.DB_NAME || 'clinic6-pharmacy';
const DB_USER: string = process.env.DB_USER || 'postgres';
const DB_PASS: string = process.env.DB_PASS || 'Admin123';
const DB_HOST: string = process.env.DB_HOST || 'localhost';
const DB_PORT: number = +process.env.DB_PORT || 5432;

// static
const STATIC: string = process.env.STATIC || 'static';

// jsonwebtoken
const ISSUER: string = process.env.ISSUER || 'Nsis';
const AUDIENCE: string = process.env.AUDIENCE || 'http://chnirt.github.io';
const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN || 'access-token';
const ACCESS_TOKEN_SECRET: string =
  process.env.ACCESS_TOKEN_SECRET || 'access-token-key';
const REFRESH_TOKEN: string = process.env.REFRESH_TOKEN || 'refresh-token';
const REFRESH_TOKEN_SECRET: string =
  process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key';
const EMAIL_TOKEN: string = process.env.EMAIL_TOKEN || 'email-token';
const EMAIL_TOKEN_SECRET: string =
  process.env.EMAIL_TOKEN_SECRET || 'email-token-key';
const RESETPASS_TOKEN: string =
  process.env.RESETPASS_TOKEN || 'resetpass-token';
const RESETPASS_TOKEN_SECRET: string =
  process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key';

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10;

export {
  NODE_ENV,
  AUTHOR,
  PRIMARY_COLOR,
  DOMAIN,
  PORT,
  END_POINT,
  FE_URL,
  RATE_LIMIT_MAX,
  GRAPHQL_DEPTH_LIMIT,
  STATIC,
  ISSUER,
  AUDIENCE,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SECRET,
  RESETPASS_TOKEN,
  RESETPASS_TOKEN_SECRET,
  EMAIL_TOKEN,
  EMAIL_TOKEN_SECRET,
  BCRYPT_SALT,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
};

import {config} from "dotenv";
config()

export default {
  PORT: process.env.PORT || process.env.APP_PORT,
  DB: process.env.APP_DB,
  DOMAIN: process.env.APP_DOMAIN,
  SENDGRID_API: process.env.SENDGRID_API,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    CLIENT_URL: process.env.CLIENT_URL,
  //aws credentials
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME
};




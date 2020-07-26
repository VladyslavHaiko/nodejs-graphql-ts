export const config = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  FRONTEND_URL: process.env.FRONTEND_URL,

  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,

  CRON_JOB_PERIOD: process.env.CRON_JOB_PERIOD,

  JWT_SECRET: process.env.JWT_SECRET,
  ACCESS_TOKEN_LIFETIME: process.env.ACCESS_TOKEN_LIFETIME,

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  REFRESH_TOKEN_LIFETIME: process.env.REFRESH_TOKEN_LIFETIME,

  JWT_CONFIRM_EMAIL_SECRET: process.env.JWT_CONFIRM_EMAIL_SECRET,
  JWT_CONFIRM_EMAIL_LIFETIME: process.env.JWT_CONFIRM_EMAIL_LIFETIME,

  JWT_PASS_RESET_SECRET: process.env.JWT_PASS_RESET_SECRET,
  JWT_PASS_RESET_LIFETIME: process.env.JWT_PASS_RESET_LIFETIME,

  serverRateLimits: {
    period: 15 * 60 * 1000, // 15 minutes
    maxRequests: 1000
  },

  // DB_NAME: process.env.DB_NAME || 'dev_book',
  // DB_USER_NAME: process.env.DB_USER_NAME || 'root',
  // DB_PASSWORD: process.env.DB_PASSWORD || 'root',
  // DB_HOST: process.env.DB_HOST || 'localhost',
  // DB_DIALECT: process.env.DB_DIALECT || 'mysql'

  SEQUELIZE_URI: 'mysql://root:root@localhost:3306/db'

  // ROOT_EMAIL: process.env.ROOT_EMAIL,
  // ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD,
  // ROOT_EMAIL_SERVICE: process.env.ROOT_EMAIL_SERVICE,

  // SUPPORT_EMAIL: process.env.SUPPORT_EMAIL
};

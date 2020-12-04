export const config = {
    PORT: process.env.PORT,
    FRONTEND_URL: process.env.FRONTEND_URL,

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,

    CRON_JOB_PERIOD: process.env.CRON_JOB_PERIOD,

    MONGODB_URL: process.env.MONGODB_URL ||'MONGODB_URL: process.env.MONGODB_URL',

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
    }

};

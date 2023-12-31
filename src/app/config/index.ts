import 'dotenv/config';
const env = (key: string) => {
  return process.env[key];
};

export default {
  PORT: env('PORT') ?? 3000,
  NODE_ENV: env('NODE_ENV') ?? 'dev',
  LOGGER_LEVELS: {
    DEBUG: 'debug',
    ERROR: 'error',
    INFO: 'info',
  },
  MONGO: [
    {
      DB: 'template',
      CONNECTION: env('MONGODB_TEMPLATE') ?? 'mongodb://localhost:27017/backend-template',
    },
  ],
};

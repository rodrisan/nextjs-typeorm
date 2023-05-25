import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      host: process.env.DATABASE_HOST,
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
    },
    apiKey: process.env.API_KEY,
  };
});

import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/.env` });

const dbURL = process.env.DB_URL;

if (!dbURL) {
  throw new Error('DB_URL is undefined');
}

mongoose
  .connect(dbURL, {
    autoIndex: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err: Error) => console.log(err));

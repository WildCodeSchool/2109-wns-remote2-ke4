import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { buildSchema } from 'graphql';

dotenv.config({ path: `${__dirname}/../.env` });
const dbURL = process.env.DB_URL;

if (!dbURL) {
  throw new Error('DB_URL is undefined');
}

const schema = buildSchema(`
  type User {
    id: String
    mdp: String
    email: String
    role: [String]
  }

  type Query {
    allUsers: [User]
  }

  type Mutation {
    addUser(mdp: String, email: String, role: [String]): [User]
  }

`);

mongoose
  .connect(dbURL, {
    autoIndex: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err: Error) => console.log(err));

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import schema from './graphql/graphql';
import prisma from './lib/prisma';
import { JWT_LOGIN_SECRET } from './config';
import jwt from 'jsonwebtoken';
import Context from '@tsTypes/context';
import moduleAlias from 'module-alias';
import path from 'path';

moduleAlias.addAliases({
  '@lib': path.join(__dirname, 'lib'),
  '@graphql': path.join(__dirname, '/graphql'),
  '@tsTypes': path.join(__dirname, '/tsTypes'),
});

const app = express();

app.use(cors());
app.use(express.json());

async function startApolloServer() {
  const apolloServer = new ApolloServer({
    schema: schema,
    context: async ({ req }): Promise<Context | undefined> => {
      if (req.headers?.authorization) {
        const token = (req.headers?.authorization || '').replace('Bearer ', '');
        try {
          const decoded = jwt.verify(token, JWT_LOGIN_SECRET);
          //@ts-ignore
          if (!decoded || !decoded.userId) return {};
          const user = await prisma.user.findUnique({
            where: {
              //@ts-ignore
              id: decoded.userId,
            },
          });
          if (!user) return {};
          return { user };
        } catch (err) {
          return {};
        }
      }
    },
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app, path: '/graphql' });
}

startApolloServer();

app.listen(process.env.PORT || 4000, () => {
  console.log(`Its ready at http://localhost:${process.env.PORT || 4000}`);
});

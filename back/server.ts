import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import schema from "./graphql";

const app = express();

app.use(cors());
app.use(express.json());

async function startApolloServer() {
  const apolloServer = new ApolloServer({ schema: schema });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app, path: "/graphql" });
}

startApolloServer();

app.listen(process.env.PORT || 4000, () => {
  console.log(`Its ready at http://localhost:${process.env.PORT || 4000}`);
});

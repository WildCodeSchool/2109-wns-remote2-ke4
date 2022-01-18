import { GraphQLObjectType } from "graphql";

const queries = new GraphQLObjectType({
  name: "RootQueries",
  description: "Queries of tzar",
  fields: () => ({
    // queries
  }),
});
export default queries;

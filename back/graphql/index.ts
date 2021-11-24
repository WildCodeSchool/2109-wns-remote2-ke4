import { graphql, GraphQLSchema } from "graphql";
import mutations from "./mutation";
import queries from "./queries";

const schema = new GraphQLSchema({
  query: queries,
  mutation: mutations,
});
export default schema;

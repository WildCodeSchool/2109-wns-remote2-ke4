import { GraphQLObjectType } from "graphql/type";
import registerPost from "./Post";

const mutations = new GraphQLObjectType({
  name: "RootMutation",
  description: "Mutations of Ke4",
  // @ts-ignore
  fields: () => ({
    registerPost,
  }),
});
export default mutations;

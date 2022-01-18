import { GraphQLObjectType } from "graphql/type";

const mutations = new GraphQLObjectType({
  name: "RootMutation",
  description: "Mutations of Ke4",
  // @ts-ignore
  fields: () => ({
    // mutations
  }),
});
export default mutations;

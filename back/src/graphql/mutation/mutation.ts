import { GraphQLObjectType } from 'graphql/type';
import registerPost from './Post/postMutation';

const mutations = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Mutations of Ke4',
  // @ts-ignore
  fields: () => ({
    registerPost,
  }),
});
export default mutations;

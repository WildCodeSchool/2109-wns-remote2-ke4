import { GraphQLObjectType } from 'graphql';
import queriesPost from './Post/postQuery';

const queries = new GraphQLObjectType({
  name: 'RootQueries',
  description: 'Queries of tzar',
  fields: () => ({
    ...queriesPost,
  }),
});
export default queries;
import { GraphQLSchema } from 'graphql';
import mutations from './mutation/mutation';
import queries from './queries/query';

const schema = new GraphQLSchema({
  query: queries,
  mutation: mutations,
});

export default schema;

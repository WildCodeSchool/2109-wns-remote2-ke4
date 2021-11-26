import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} from 'graphql';

const commentType = new GraphQLObjectType({
  name: 'comment',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    postDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
export default commentType;

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} from 'graphql';

const Comment = new GraphQLObjectType({
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
    authorId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    ticketId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});
export default Comment;

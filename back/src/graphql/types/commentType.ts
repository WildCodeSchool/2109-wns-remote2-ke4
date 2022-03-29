import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} from 'graphql';
import User from './userType';
import prisma from '../../lib/prisma';
import { Comment } from '@prisma/client';

const TypeComment = new GraphQLObjectType({
  name: 'TypeComment',
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
      type: new GraphQLNonNull(User),
      resolve: async (node: Comment) => {
        const comment = await prisma.comment.findUnique({
          where: {
            id: node.id,
          },
        });
        const author = await prisma.user.findUnique({
          where: {
            id: comment?.userId,
          },
        });
        return author || null;
      },
    },
  }),
});
export default TypeComment;

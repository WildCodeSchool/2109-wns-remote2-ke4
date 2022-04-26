import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} from 'graphql';
import User from './userType';
import prisma from '../../lib/prisma';
import { Comment } from '@prisma/client';
import TypeUser from './userType';

const TypeComment = new GraphQLObjectType({
  name: 'TypeComment',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    postDate: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    author: {
      type: TypeUser,
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

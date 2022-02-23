import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import Comment from '../../types/commentType';
import prisma from '../../../lib/prisma';

const queriesComment: GraphQLFieldConfigMap<any, any> = {
  getAllComments: {
    type: new GraphQLList(Comment),
    resolve: async () => {
      const comments = await prisma.comment.findMany();
      return comments || [];
    },
  },

  getCommentById: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLNonNull(Comment),
    resolve: async (_, args) => {
      return await prisma.comment.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export default queriesComment;

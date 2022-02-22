import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import Comment from '../../types/commentType';
import prisma from '../../../lib/prisma';

const queriesComment: GraphQLFieldConfigMap<any, any> = {
  getAllComments: {
    type: new GraphQLNonNull(new GraphQLList(Comment)),
    resolve: async () => {
      return await prisma.comment.findMany();
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

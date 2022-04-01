import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import TypeComment from '../../types/commentType';
import prisma from '../../../lib/prisma';
import { Comment } from '@prisma/client';

const queriesComment: GraphQLFieldConfigMap<any, any> = {
  getAllCommentsByTicketId: {
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    type: new GraphQLList(TypeComment),
    resolve: async (_, args): Promise<Comment[]> => {
      const comments = await prisma.comment.findMany({
        where: {
          ticketId: args?.id,
        },
        orderBy: {
          postDate: 'desc',
        },
      });
      return comments || [];
    },
  },
};

export default queriesComment;

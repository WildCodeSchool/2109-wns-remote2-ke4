import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import prisma from '../../../lib/prisma';
import Context from '@tsTypes/context';
import TypeComment from '../../types/commentType';
import { Comment } from '@prisma/client';

export const createComment: GraphQLFieldConfig<any, any, any> = {
  args: {
    postDate: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    ticketId: {
      type: GraphQLString,
    },
  },
  type: TypeComment,
  resolve: async (_, args, context: Context): Promise<Comment | undefined> => {
    if (!context.user) return;
    const comment = await prisma.comment.create({
      data: {
        postDate: args.postDate,
        content: args.content,
        userId: context.user.id,
        ticketId: args.ticketId,
      },
    });
    return comment;
  },
};

export const deleteComment: GraphQLFieldConfig<any, any, any> = {
  args: {
    id: {
      type: GraphQLID,
    },
  },
  type: new GraphQLNonNull(GraphQLBoolean),
  resolve: async (_, args): Promise<boolean> => {
    await prisma.comment.delete({
      where: {
        id: args.id,
      },
    });
    return true;
  },
};

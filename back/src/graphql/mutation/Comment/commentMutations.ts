import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import Comment from '../../types/commentType';
import prisma from '../../../lib/prisma';

interface argstype {
  // todo
}

export const registerComment: GraphQLFieldConfig<any, any, any> = {
  args: {
    postDate: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
    ticketId: {
      type: GraphQLString,
    },
  },
  type: new GraphQLNonNull(GraphQLID),
  resolve: async (_, args) => {
    const post = await prisma.comment.create({
      data: {
        postDate: args.postDate,
        content: args.content,
        authorId: args.author,
        ticketId: args.ticketId,
      },
    });
    console.dir(post);
    return post.id;
  },
};

export const updateCommentById: GraphQLFieldConfig<any, any, any> = {
  args: {
    id: {
      type: GraphQLID,
    },
    postDate: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    authorId: {
      type: GraphQLID,
    },
    ticketId: {
      type: GraphQLString,
    },
  },
  type: new GraphQLNonNull(Comment),
  resolve: async (_, args) => {
    return await prisma.comment.update({
      where: {
        id: args.id,
      },
      data: {
        postDate: args.postDate,
        author: args.author,
        content: args.content,
        authorId: args.authorId,
      },
    });
  },
};

export const deleteCommentById: GraphQLFieldConfig<any, any, any> = {
  args: {
    id: {
      type: GraphQLID,
    },
  },
  type: new GraphQLNonNull(Comment),
  resolve: async (_, args) => {
    return await prisma.comment.delete({
      where: {
        id: args.id,
      },
    });
  },
};

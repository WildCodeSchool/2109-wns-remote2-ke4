import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import prisma from '../../../lib/prisma';

interface argstype {
  // todo
}

const registerComment: GraphQLFieldConfig<any, any, any> = {
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
  },
  type: new GraphQLNonNull(GraphQLID),
  resolve: async (_, args) => {
    const post = await prisma.comment.create({
      data: {
        postDate: args.postDate,
        content: args.content,
        authorId: args.author,
      },
    });
    console.dir(post);
    return post.id;
  },
};

export default registerComment;

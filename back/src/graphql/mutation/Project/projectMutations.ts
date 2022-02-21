import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import prisma from '../../../lib/prisma';

const registerProject: GraphQLFieldConfig<any, any, any> = {
  args: {
    name: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
    ticket: {
      type: new GraphQLList(GraphQLString),
    },
    client: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    user: {
      type: new GraphQLList(GraphQLString),
    },
    investedTime: {
      type: GraphQLString,
    },
    estimatedTime: {
      type: GraphQLString,
    },
  },
  type: new GraphQLNonNull(GraphQLID),
  resolve: async (_, args) => {
    const post = await prisma.project.create({
      data: {
        name: args.name,
        author: args.author,
        ticketId: args.ticket,
        client: args.client,
        status: args.status,
        description: args.description,
        userId: args.user,
        investedTime: args.investedTime,
        estimatedTime: args.estimatedTime,
      },
    });
    console.dir(post);
    return post.id;
  },
};

export default registerProject;

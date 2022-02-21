import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import prisma from '../../../lib/prisma';

const registerTicket: GraphQLFieldConfig<any, any, any> = {
  args: {
    name: {
      type: GraphQLString,
    },
    project: {
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
    startDate: {
      type: GraphQLString,
    },
    endDate: {
      type: GraphQLString,
    },
    ressources: {
      type: new GraphQLList(GraphQLString),
    },
    priority: {
      type: GraphQLString,
    },
  },
  type: new GraphQLNonNull(GraphQLID),
  resolve: async (_, args) => {
    const post = await prisma.ticket.create({
      data: {
        name: args.name,
        projectId: args.project,
        status: args.status,
        description: args.description,
        userId: args.user,
        investedTime: args.investedTime,
        estimatedTime: args.estimatedTime,
        startDate: args.startDate,
        endDate: args.endDate,
        ressources: args.ressources,
        priority: args.priority,
      },
    });
    console.dir(post);
    return post.id;
  },
};

export default registerTicket;

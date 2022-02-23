import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import Project from '../../types/projectType';
import prisma from '../../../lib/prisma';

export const registerProject: GraphQLFieldConfig<any, any, any> = {
  args: {
    name: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
    ticketsId: {
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
        ticketsId: args.ticketsId,
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

export const updateProjectByID: GraphQLFieldConfig<any, any, any> = {
  args: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
    ticketsId: {
      type: new GraphQLList(GraphQLID),
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
      type: new GraphQLList(GraphQLID),
    },
    investedTime: {
      type: GraphQLString,
    },
    estimatedTime: {
      type: GraphQLString,
    },
  },
  type: new GraphQLNonNull(Project),
  resolve: async (_, args) => {
    return await prisma.project.update({
      where: {
        id: args.id,
      },
      data: {
        name: args.name,
        author: args.author,
        ticketsId: args.ticketsId,
        client: args.client,
        status: args.status,
        description: args.description,
        user: args.user,
        investedTime: args.investedTime,
        estimatedTime: args.estimatedTime,
      },
    });
  },
};

export const deleteProjectById: GraphQLFieldConfig<any, any, any> = {
  args: {
    id: {
      type: GraphQLID,
    },
  },
  type: new GraphQLNonNull(Project),
  resolve: async (_, args) => {
    return await prisma.project.delete({
      where: {
        id: args.id,
      },
    });
  },
};

import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import Project from '../../types/projectType';
import prisma from '../../../lib/prisma';

const queriesProject: GraphQLFieldConfigMap<any, any> = {
  getAllProjects: {
    type: new GraphQLNonNull(new GraphQLList(Project)),
    resolve: async () => {
      return await prisma.project.findMany();
    },
  },

  getProjectById: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLNonNull(Project),
    resolve: async (_, args) => {
      return await prisma.project.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },

  updateProjectByID: {
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
      ticketId: {
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
          ticketId: args.ticketId,
          client: args.client,
          status: args.status,
          description: args.description,
          user: args.user,
          investedTime: args.investedTime,
          estimatedTime: args.estimatedTime,
        },
      });
    },
  },

  deleteProjectById: {
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
  },
};

export default queriesProject;

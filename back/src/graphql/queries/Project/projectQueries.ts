import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import Project from '../../types/projectType';
import prisma from '../../../lib/prisma';

const queriesProject: GraphQLFieldConfigMap<any, any> = {
  getAllProjects: {
    type: new GraphQLList(Project),
    resolve: async () => {
      const projects = await prisma.project.findMany();
      return projects || [];
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
};

export default queriesProject;

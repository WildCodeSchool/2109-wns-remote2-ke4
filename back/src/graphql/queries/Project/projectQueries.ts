import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import projectType from '../../types/projectType';
import prisma from '../../../lib/prisma';

const queriesProject: GraphQLFieldConfigMap<any, any> = {
  getAllProjects: {
    type: new GraphQLNonNull(new GraphQLList(projectType)),
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
    type: new GraphQLNonNull(projectType),
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

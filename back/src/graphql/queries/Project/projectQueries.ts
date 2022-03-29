import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import TypeProject from '../../types/projectType';
import prisma from '../../../lib/prisma';
import Context from '@tsTypes/context';
import { Project, UserProject } from '@prisma/client';

const queriesProject: GraphQLFieldConfigMap<any, any> = {
  getAllProjects: {
    type: new GraphQLList(TypeProject),
    resolve: async (): Promise<Project[]> => {
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
    type: new GraphQLNonNull(TypeProject),
    resolve: async (_, args): Promise<Project | null> => {
      const project = await prisma.project.findUnique({
        where: {
          id: args.id,
        },
      });
      return project;
    },
  },

  getAllProjectsByUserId: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLList(TypeProject),
    resolve: async (_, args): Promise<UserProject[]> => {
      const projects = await prisma.userProject.findMany({
        where: {
          userId: args?.id,
        },
      });
      return projects || [];
    },
  },
  getAllProjectsByViewer: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLList(TypeProject),
    resolve: async (
      _,
      args,
      context: Context
    ): Promise<UserProject[] | undefined> => {
      if (!context.user) return;
      const projects = await prisma.userProject.findMany({
        where: {
          userId: context.user.id,
        },
      });
      return projects.sort((x) => (x?.isFavorite ? -1 : 1)) || [];
    },
  },
};

export default queriesProject;

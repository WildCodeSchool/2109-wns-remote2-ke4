import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import prisma from '../../../lib/prisma';
import Context from '@tsTypes/context';
import TypeProject from '@graphql/types/projectType';
import { Project, UserProject } from '@prisma/client';

export const createProject: GraphQLFieldConfig<any, any, any> = {
  args: {
    name: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
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
    date: {
      type: GraphQLString,
    },
    investedTime: {
      type: GraphQLString,
    },
    estimatedTime: {
      type: GraphQLString,
    },
  },
  type: TypeProject,
  resolve: async (_, args, context: Context): Promise<Project | undefined> => {
    if (!context?.user) return;
    const project = await prisma.project.create({
      data: {
        name: args.name,
        author: args.author,
        client: args.client,
        status: args.status,
        description: args.description,
        date: args.date,
        investedTime: args.investedTime,
        estimatedTime: args.estimatedTime,
        createdBy: context?.user?.id,
      },
    });

    for (const userId of args.users) {
      await prisma.userProject.create({
        data: {
          userId: userId,
          projectId: project.id,
        },
      });
    }
    return project;
  },
};

export const updateProject: GraphQLFieldConfig<any, any, any> = {
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
    date: {
      type: GraphQLString,
    },
    investedTime: {
      type: GraphQLString,
    },
    estimatedTime: {
      type: GraphQLString,
    },
  },
  type: TypeProject,
  resolve: async (_, args, context: Context): Promise<Project | undefined> => {
    if (!context?.user) return;
    const project = await prisma.project.update({
      where: {
        id: args.id,
      },
      data: {
        name: args.name,
        author: args.author,
        client: args.client,
        status: args.status,
        description: args.description,
        date: args.date,
        investedTime: args.investedTime,
        estimatedTime: args.estimatedTime,
        updatedBy: context?.user?.id,
      },
    });

    await prisma.userProject.deleteMany({
      where: {
        projectId: project.id,
      },
    });

    for (const userId of args.users) {
      await prisma.userProject.create({
        data: {
          userId: userId,
          projectId: project.id,
        },
      });
    }
    return project;
  },
};

export const deleteProject: GraphQLFieldConfig<any, any, any> = {
  args: {
    id: {
      type: GraphQLID,
    },
  },
  type: new GraphQLNonNull(GraphQLBoolean),
  resolve: async (_, args, context: Context): Promise<boolean | undefined> => {
    if (!context.user) return;
    const project = await prisma.project.findUnique({
      where: {
        id: args.id,
      },
    });
    if (project?.author !== context.user.id) {
      throw new Error(
        "Vous ne pouvez supprimer ce projet car vous n'etes pas l'autheur"
      );
    }

    await prisma.userProject.deleteMany({
      where: {
        projectId: project.id,
      },
    });
    await prisma.project.delete({
      where: {
        id: args.id,
      },
    });
    return true;
  },
};

export const projectFav: GraphQLFieldConfig<any, any, any> = {
  args: {
    projectId: {
      type: GraphQLID,
    },
    isFavorite: {
      type: GraphQLBoolean,
    },
  },
  type: TypeProject,
  resolve: async (
    _,
    args,
    context: Context
  ): Promise<UserProject | undefined> => {
    if (!context.user) return;
    const project = await prisma.userProject.update({
      where: {
        userId_projectId: {
          userId: context?.user?.id,
          projectId: args.projectId,
        },
      },
      data: {
        isFavorite: args?.isFavorite,
      },
    });
    return project;
  },
};

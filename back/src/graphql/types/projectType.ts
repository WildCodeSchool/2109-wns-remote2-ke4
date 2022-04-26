import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import User from './userType';
import prisma from '../../lib/prisma';
import { Project } from '@prisma/client';
import Ticket from './ticketType';
import Context from '@tsTypes/context';
import GraphQLDate from '@graphql/GraphQlDate';

const TypeProject: any = new GraphQLObjectType({
  name: 'TypeProject',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
      resolve: async (node: Project) => {
        const author = await prisma.project.findUnique({
          where: {
            id: node.id,
          },
        });
        if (!author) return;

        const res = await prisma.user.findUnique({
          where: {
            id: author.author,
          },
        });

        if (!res) return;
        return res?.fullName;
      },
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
    investedTime: {
      type: GraphQLString,
    },
    estimatedTime: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLDate,
    },
    devs: {
      type: new GraphQLList(User),
      resolve: async (node: Project) => {
        const devs = await prisma.userProject.findMany({
          where: {
            projectId: node.id,
          },
          include: {
            User: true,
          },
        });
        return devs.map((e) => e.User) || [];
      },
    },
    tickets: {
      type: new GraphQLList(Ticket),
      resolve: async (node: Project) => {
        const tickets = await prisma.ticket.findMany({
          where: {
            projectId: node.id,
          },
        });
        return tickets || [];
      },
    },
    numberDev: {
      type: GraphQLInt,
      resolve: async (node: Project) => {
        const count = await prisma.userProject.count({
          where: {
            projectId: node.id,
          },
        });
        return count;
      },
    },
    isFavorite: {
      type: GraphQLBoolean,
      resolve: async (node: Project, _, context: Context) => {
        if (!context?.user) return;
        const result = await prisma.userProject.findUnique({
          where: {
            userId_projectId: {
              projectId: node.id,
              userId: context?.user?.id,
            },
          },
        });
        return result?.isFavorite;
      },
    },
  }),
});
export default TypeProject;

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import User from './userType';
import prisma from '../../lib/prisma';
import { Project } from '@prisma/client';
import Ticket from './ticketType';

const TypeProject: any = new GraphQLObjectType({
  name: 'TypeProject',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
    client: {
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    investedTime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    estimatedTime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    devs: {
      type: new GraphQLList(User),
      resolve: async (node: Project) => {
        const devs = await prisma.userProject.findMany({
          where: {
            projectId: node.id,
          },
        });
        return devs || [];
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
  }),
});
export default TypeProject;

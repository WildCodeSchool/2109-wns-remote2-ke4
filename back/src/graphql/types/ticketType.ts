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
import { Ticket } from '@prisma/client';

const TypeTicket: any = new GraphQLObjectType({
  name: 'TypeTicket',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    ressources: {
      type: new GraphQLList(GraphQLString),
    },
    priority: {
      type: GraphQLString,
    },
    progress: {
      type: GraphQLInt,
    },
    devs: {
      type: new GraphQLList(User),
      resolve: async (node: Ticket) => {
        const devs = await prisma.userTicket.findMany({
          where: {
            ticketId: node.id,
          },
        });
        return devs || [];
      },
    },
  }),
});
export default TypeTicket;

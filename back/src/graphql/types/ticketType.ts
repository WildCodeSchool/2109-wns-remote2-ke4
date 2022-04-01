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
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    ressources: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    priority: {
      type: new GraphQLNonNull(GraphQLString),
    },
    progress: {
      type: new GraphQLNonNull(GraphQLInt),
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

import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import ticketType from '../../types/ticketType';
import prisma from '../../../lib/prisma';

const queriesTicket: GraphQLFieldConfigMap<any, any> = {
  getAllTickets: {
    type: new GraphQLNonNull(new GraphQLList(ticketType)),
    resolve: async () => {
      return await prisma.ticket.findMany();
    },
  },

  getTicketById: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLNonNull(ticketType),
    resolve: async (_, args) => {
      return await prisma.ticket.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export default queriesTicket;

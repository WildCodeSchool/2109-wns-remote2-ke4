import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import Ticket from '../../types/ticketType';
import prisma from '../../../lib/prisma';

const queriesTicket: GraphQLFieldConfigMap<any, any> = {
  getAllTickets: {
    type: new GraphQLList(Ticket),
    resolve: async () => {
      const tickets = prisma.ticket.findMany();
      return tickets || [];
    },
  },

  getTicketById: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLNonNull(Ticket),
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

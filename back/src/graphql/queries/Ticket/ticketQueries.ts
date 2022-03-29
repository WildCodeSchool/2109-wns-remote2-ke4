import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import TypeTicket from '../../types/ticketType';
import prisma from '../../../lib/prisma';
import { Ticket } from '@prisma/client';

const queriesTicket: GraphQLFieldConfigMap<any, any> = {
  getAllTickets: {
    type: new GraphQLList(TypeTicket),
    resolve: async (): Promise<Ticket[]> => {
      const tickets = await prisma.ticket.findMany();
      return tickets || [];
    },
  },

  getTicketById: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLNonNull(TypeTicket),
    resolve: async (_, args): Promise<Ticket | null> => {
      const ticket = await prisma.ticket.findUnique({
        where: {
          id: args.id,
        },
      });
      return ticket;
    },
  },
  getAllTicketsByProjectId: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLList(TypeTicket),
    resolve: async (_, args): Promise<Ticket[]> => {
      const tickets = await prisma.ticket.findMany({
        where: {
          projectId: args.id,
        },
      });
      return tickets || [];
    },
  },
};

export default queriesTicket;

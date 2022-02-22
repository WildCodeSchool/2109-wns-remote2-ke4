import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import Ticket from '../../types/ticketType';
import prisma from '../../../lib/prisma';

const queriesTicket: GraphQLFieldConfigMap<any, any> = {
  getAllTickets: {
    type: new GraphQLNonNull(new GraphQLList(Ticket)),
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
    type: new GraphQLNonNull(Ticket),
    resolve: async (_, args) => {
      return await prisma.ticket.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },

  updateTicketById: {
    args: {
      id: {
        type: GraphQLID,
      },
      name: {
        type: GraphQLString,
      },
      projectId: {
        type: new GraphQLList(GraphQLID),
      },
      status: {
        type: GraphQLString,
      },
      description: {
        type: GraphQLString,
      },
      userId: {
        type: new GraphQLList(GraphQLID),
      },
      ressources: {
        type: new GraphQLList(GraphQLString),
      },
    },
    type: new GraphQLNonNull(Ticket),
    resolve: async (_, args) => {
      return await prisma.ticket.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
          projectId: args.projectId,
          status: args.status,
          description: args.description,
          userId: args.userId,
          ressources: args.ressources,
        },
      });
    },
  },

  deleteTicketById: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLNonNull(Ticket),
    resolve: async (_, args) => {
      return await prisma.ticket.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export default queriesTicket;

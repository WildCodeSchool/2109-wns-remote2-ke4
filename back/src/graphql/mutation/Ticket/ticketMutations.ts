import GraphQLDate from '@graphql/GraphQlDate';
import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import prisma from '../../../lib/prisma';
import TypeTicket from '../../types/ticketType';
import { Ticket } from '@prisma/client';
import Context from '@tsTypes/context';

export const createTicket: GraphQLFieldConfig<any, any, any> = {
  args: {
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
      type: new GraphQLEnumType({
        name: 'EnumProrityTicket',
        values: {
          IMPORTANT: { value: 'IMPORTANT' },
          LIGHT: { value: 'LIGHT' },
          MEDIUM: { value: 'MEDIUM' },
        },
      }),
    },
    users: {
      type: new GraphQLList(GraphQLString),
    },
    progress: {
      type: GraphQLInt,
    },
    projectId: {
      type: GraphQLString,
    },
  },
  type: TypeTicket,
  resolve: async (_, args, context: Context): Promise<Ticket | undefined> => {
    if (!context?.user) return;
    const ticket = await prisma.ticket.create({
      data: {
        name: args.name,
        status: args.status,
        description: args.description,
        ressources: args.ressources,
        priority: args.priority,
        progress: args.progress,
        endDate: args.endDate,
        investedTime: args.investedTime,
        estimatedTime: args.estimatedTime,
        startDate: args?.startDate,
        createdAt: context?.user?.id,
        projectId: args?.projectId,
      },
    });

    for (const userId of args.users) {
      await prisma.userTicket.create({
        data: {
          ticketId: ticket.id,
          userId: userId,
        },
      });
    }
    return ticket;
  },
};

export const updateTicket: GraphQLFieldConfig<any, any, any> = {
  args: {
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
      type: new GraphQLEnumType({
        name: 'EnumProrityTicket',
        values: {
          IMPORTANT: { value: 'IMPORTANT' },
          LIGHT: { value: 'LIGHT' },
          MEDIUM: { value: 'MEDIUM' },
        },
      }),
    },
    users: {
      type: new GraphQLList(GraphQLString),
    },
    progress: {
      type: GraphQLInt,
    },
  },
  type: TypeTicket,
  resolve: async (_, args, context: Context): Promise<Ticket | undefined> => {
    if (!context?.user) return;
    const ticket = await prisma.ticket.update({
      where: {
        id: args.id,
      },
      data: {
        name: args.name,
        status: args.status,
        description: args.description,
        ressources: args.ressources,
        priority: args.priority,
        progress: args.progress,
        endDate: args.endDate,
        investedTime: args.investedTime,
        estimatedTime: args.estimatedTime,
        startDate: args?.startDate,
        updatedBy: context?.user?.id,
      },
    });

    await prisma.userTicket.deleteMany({
      where: {
        ticketId: ticket.id,
      },
    });

    for (const userId of args.users) {
      await prisma.userTicket.create({
        data: {
          ticketId: ticket.id,
          userId: userId,
        },
      });
    }
    return ticket;
  },
};

export const deleteTicket: GraphQLFieldConfig<any, any, any> = {
  args: {
    id: {
      type: GraphQLID,
    },
  },
  type: GraphQLBoolean,
  resolve: async (_, args): Promise<boolean | undefined> => {
    await prisma.userTicket.deleteMany({
      where: {
        ticketId: args?.id,
      },
    });
    await prisma.ticket.delete({
      where: {
        id: args.id,
      },
    });
    return true;
  },
};

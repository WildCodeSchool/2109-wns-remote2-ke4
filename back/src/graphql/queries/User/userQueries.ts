import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import TypeUser from '../../types/userType';
import prisma from '../../../lib/prisma';
import Context from '@tsTypes/context';
import { User } from '@prisma/client';

const queriesUser: GraphQLFieldConfigMap<any, any> = {
  getAllUsers: {
    type: new GraphQLList(TypeUser),
    resolve: async (): Promise<User[]> => {
      const users = await prisma.user.findMany();
      return users || [];
    },
  },

  getUserById: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLNonNull(TypeUser),
    resolve: async (_, args): Promise<User | null> => {
      const user = await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
      return user;
    },
  },
  getViewer: {
    type: TypeUser,
    resolve: async (_, __, context: Context): Promise<User | null> => {
      if (!context.user) return null;
      const viewer = await prisma.user.findUnique({
        where: {
          id: context.user.id,
        },
      });
      return viewer || null;
    },
  },
  getSearchUser: {
    args: {
      search: {
        type: GraphQLString,
      },
    },
    type: new GraphQLList(TypeUser),
    resolve: async (_, args, context: Context): Promise<User[] | undefined> => {
      // if (!context.user) return;
      if (args.search.length < 4) return [];
      const result = await prisma.user.findMany({
        where: {
          fullName: {
            contains: args?.search,
          },
        },
        orderBy: { lastName: 'asc' },
      });
      return result || [];
    },
  },
};

export default queriesUser;

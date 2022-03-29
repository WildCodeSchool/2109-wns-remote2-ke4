import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
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
    resolve: async (
      _,
      __,
      context: Context
    ): Promise<User | null | undefined> => {
      if (!context.user) return;
      const viewer = await prisma.user.findUnique({
        where: {
          id: context.user.id,
        },
      });
      return viewer || null;
    },
  },
};

export default queriesUser;

import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import User from '../../types/userType';
import prisma from '../../../lib/prisma';

const queriesUser: GraphQLFieldConfigMap<any, any> = {
  getAllUsers: {
    type: new GraphQLList(User),
    resolve: async () => {
      const users = prisma.user.findMany();
      return users || [];
    },
  },

  getUserById: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLNonNull(User),
    resolve: async (_, args) => {
      return await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export default queriesUser;

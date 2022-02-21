import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import userType from '../../types/userType';
import prisma from '../../../lib/prisma';

const queriesUser: GraphQLFieldConfigMap<any, any> = {
  getAllUsers: {
    type: new GraphQLNonNull(new GraphQLList(userType)),
    resolve: async () => {
      return await prisma.user.findMany();
    },
  },

  getUserById: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLNonNull(userType),
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

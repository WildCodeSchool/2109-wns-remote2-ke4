import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import User from '../../types/userType';
import prisma from '../../../lib/prisma';

const queriesUser: GraphQLFieldConfigMap<any, any> = {
  getAllUsers: {
    type: new GraphQLNonNull(new GraphQLList(User)),
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
    type: new GraphQLNonNull(User),
    resolve: async (_, args) => {
      return await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },

  updateUserById: {
    args: {
      id: {
        type: GraphQLID,
      },
      email: {
        type: GraphQLString,
      },
      mdp: {
        type: GraphQLString,
      },
      name: {
        type: GraphQLString,
      },
      firstname: {
        type: GraphQLString,
      },
      avatar: {
        type: GraphQLString,
      },
      description: {
        type: GraphQLString,
      },
      role: {
        type: GraphQLString,
      },
      project: {
        type: new GraphQLList(GraphQLString),
      },
      ticket: {
        type: new GraphQLList(GraphQLString),
      },
    },
    type: new GraphQLNonNull(User),
    resolve: async (_, args) => {
      return await prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          email: args.email,
          mdp: args.mdp,
          name: args.name,
          firstname: args.firstname,
          avatar: args.avatar,
          description: args.description,
          role: args.role,
          project: args.project,
          ticket: args.ticket,
        },
      });
    },
  },

  deleteUserById: {
    args: {
      id: {
        type: GraphQLID,
      },
    },
    type: new GraphQLNonNull(User),
    resolve: async (_, args) => {
      return await prisma.user.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export default queriesUser;

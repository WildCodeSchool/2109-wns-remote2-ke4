import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import User from '../../types/userType';
import prisma from '../../../lib/prisma';

interface argstype {
  // todo
}

export const registerUser: GraphQLFieldConfig<any, any, any> = {
  args: {
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
      type: new GraphQLList(GraphQLString),
    },
    project: {
      type: new GraphQLList(GraphQLString),
    },
    ticket: {
      type: new GraphQLList(GraphQLString),
    },
  },
  type: new GraphQLNonNull(GraphQLID),
  resolve: async (_, args) => {
    const post = await prisma.user.create({
      data: {
        email: args.email,
        mdp: args.mdp,
        name: args.name,
        firstname: args.firstname,
        avatar: args.avatar,
        description: args.description,
        role: args.role,
        projectId: args.project,
        ticketId: args.ticket,
      },
    });
    console.dir(post);
    return post.id;
  },
};

export const updateUserById: GraphQLFieldConfig<any, any, any> = {
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
};

export const deleteUserById: GraphQLFieldConfig<any, any, any> = {
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
};

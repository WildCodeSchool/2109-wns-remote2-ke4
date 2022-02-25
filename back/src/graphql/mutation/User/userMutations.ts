import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import User from '../../types/userType';
import prisma from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { registerUserSchema } from '../../../joi/User';
import { JWT_LOGIN_SECRET } from '../../../config/index';

interface ArgsUser {
  email: string;
  mdp: string;
  name: string;
  firstname: string;
  avatar?: string;
  description: string;
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
  },
  type: new GraphQLNonNull(GraphQLString),
  resolve: async (_, args: ArgsUser) => {
    registerUserSchema(args);

    const salt = bcrypt.genSaltSync(10);
    const hashMdp = bcrypt.hashSync(args.mdp, salt);

    const user = await prisma.user.create({
      data: {
        email: args.email,
        mdp: hashMdp,
        name: args.name,
        firstname: args.firstname,
        avatar: args.avatar,
        description: args.description,
      },
    });

    if (!user) {
      throw new Error("L'utilisateur n'a pas été créer");
    }
    const token = jwt.sign({ userId: user.id }, JWT_LOGIN_SECRET);
    return token;
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

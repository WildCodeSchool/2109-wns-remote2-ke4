import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import TypeUser from '../../types/userType';
import prisma from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { registerUserSchema } from '../../../joi/User';
import { JWT_LOGIN_SECRET } from '../../../config/index';
import { User } from '@prisma/client';
import Joi from 'joi';
import Context from '@tsTypes/context';

interface ArgsUser {
  email: string;
  mdp: string;
  lastName: string;
  firstName: string;
  avatar?: string;
  description: string;
  pseudo: string;
}

export const registerUser: GraphQLFieldConfig<any, any, ArgsUser> = {
  args: {
    email: {
      type: GraphQLString,
    },
    mdp: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    pseudo: {
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
  resolve: async (_, args: ArgsUser): Promise<string | undefined> => {
    const fullName = args?.firstName + ' ' + args?.lastName;
    registerUserSchema(args);

    const salt = bcrypt.genSaltSync(10);
    const hashMdp = bcrypt.hashSync(args.mdp, salt);

    const user = await prisma.user.create({
      data: {
        email: args.email,
        mdp: hashMdp,
        lastName: args.lastName,
        firstName: args.firstName,
        pseudo: args.pseudo,
        fullName,
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

export const updateUser: GraphQLFieldConfig<any, any, any> = {
  args: {
    id: {
      type: GraphQLID,
    },
    email: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    pseudo: {
      type: GraphQLString,
    },
    role: {
      type: GraphQLString,
    },
  },
  type: new GraphQLNonNull(TypeUser),
  resolve: async (_, args, context: Context): Promise<User | undefined> => {
    if (!context?.user) return;
    const { firstName, lastName, email, description, pseudo } = args;

    const schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      pseudo: Joi.string().required(),
      description: Joi.string().optional().allow(''),
    }).validate(
      { firstName, lastName, email, pseudo, description },
      { abortEarly: false }
    ).error;

    if (schema) {
      throw new Error('Veuillez rentrer les données correctement');
    }

    const fullName = args?.firstName + ' ' + args?.lastName;
    const user = await prisma.user.update({
      where: {
        id: args.id || context?.user?.id,
      },
      data: {
        email,
        lastName,
        firstName,
        fullName,
        pseudo,
        avatar: args.avatar,
        description,
        role: args.role,
      },
    });
    return user;
  },
};

export const deleteUser: GraphQLFieldConfig<any, any, any> = {
  args: {
    id: {
      type: GraphQLID,
    },
  },
  type: new GraphQLNonNull(GraphQLBoolean),
  resolve: async (_, args): Promise<boolean | undefined> => {
    await prisma.userTicket.deleteMany({
      where: {
        userId: args.id,
      },
    });
    await prisma.userProject.deleteMany({
      where: {
        userId: args.id,
      },
    });
    await prisma.user.delete({
      where: {
        id: args.id,
      },
    });
    return true;
  },
};

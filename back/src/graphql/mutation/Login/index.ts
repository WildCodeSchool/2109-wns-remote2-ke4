import { GraphQLFieldConfig, GraphQLNonNull, GraphQLString } from 'graphql';
import prisma from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_LOGIN_SECRET } from '../../../config/index';

interface ArgsLogin {
  email: string;
  mdp: string;
}

export const login: GraphQLFieldConfig<any, any, ArgsLogin> = {
  args: {
    email: {
      type: GraphQLString,
    },
    mdp: {
      type: GraphQLString,
    },
  },
  type: new GraphQLNonNull(GraphQLString),
  resolve: async (_, args: ArgsLogin): Promise<string | undefined> => {
    const user = await prisma.user.findUnique({
      where: {
        email: args.email,
      },
    });
    if (!user) {
      throw new Error("L'email ne correspond à aucun utilisateur");
    }
    const mdpIsCorrect = await bcrypt.compare(args.mdp, user.mdp);
    if (!mdpIsCorrect) {
      throw new Error('Le mot de passe est incorrect');
    }
    const token = jwt.sign({ userId: user.id }, JWT_LOGIN_SECRET);

    return token;
  },
};

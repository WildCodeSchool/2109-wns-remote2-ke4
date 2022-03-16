import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import prisma from '../../../lib/prisma';
import jwt from 'jsonwebtoken';
import { JWT_LOGIN_SECRET } from '../../../config/index';
import { sendEmail } from '../../../lib/nodemailer';
import Joi from 'joi';
import bcrypt from 'bcrypt';

interface ArgsForgot {
  email: string;
}

interface ArgsReset {
  newMdp: string;
  tokenURL: string;
}

export const passwordForgot: GraphQLFieldConfig<any, any, ArgsForgot> = {
  args: {
    email: {
      type: GraphQLString,
    },
  },
  type: new GraphQLNonNull(GraphQLBoolean),
  resolve: async (_, args: ArgsForgot): Promise<boolean | undefined> => {
    const user = await prisma.user.findUnique({
      where: {
        email: args.email,
      },
    });
    if (!user) {
      throw new Error("L'email ne correspond à aucun utilisateur");
    }
    const token = jwt.sign({ userId: user.id }, JWT_LOGIN_SECRET);

    await sendEmail({
      to: user.email,
      subject: 'Réinitialisation du mot de passe',
      text: `Bonjour, Veuillez cliquez sur ce lien pour mettre à jour votre nouveau mot de passe: http://localhost:3000/login`,
      html: `<p>Bonjour<br /><br />Veuillez cliquez sur ce lien pour mettre à jour votre nouveau mot de passe: <a href='http://localhost:3000/login/${encodeURIComponent(
        token
      )}'>http://localhost:3000/login</a></p>`,
    });

    return true;
  },
};

export const resetPassword: GraphQLFieldConfig<any, any, ArgsReset> = {
  args: {
    tokenURL: {
      type: GraphQLString,
    },
    newMdp: {
      type: GraphQLString,
    },
  },
  type: new GraphQLNonNull(GraphQLBoolean),
  resolve: async (_, args: ArgsReset): Promise<boolean | undefined> => {
    const { newMdp, tokenURL } = args;
    const schemaResetMdp = Joi.object({
      tokenURL: Joi.string().required(),
      newMdp: Joi.string().required(),
    }).validate({ newMdp, tokenURL }, { abortEarly: false }).error;

    if (schemaResetMdp) {
      throw new Error('Les données entrer sont incorrect');
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(newMdp, salt);
    const decodedToken = jwt.verify(tokenURL, JWT_LOGIN_SECRET);

    const user = await prisma.user.findUnique({
      where: {
        //@ts-ignore
        id: decodedToken.userId,
      },
    });
    if (!user) return;

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        mdp: hashPassword,
      },
    });

    return true;
  },
};

import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';
import prisma from '../../../lib/prisma';
import { User } from '@prisma/client';
import Context from '@tsTypes/context';
import TypeUser from '@graphql/types/userType';

export const createWorkColleague: GraphQLFieldConfig<any, any, any> = {
  args: {
    workColleagueId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  type: TypeUser,
  resolve: async (_, args, context: Context): Promise<User | undefined> => {
    if (!context?.user) return;

    const workColleague = await prisma.reseaux.create({
      data: {
        User: {
          connect: {
            id: context.user.id,
          },
        },
        WorkColleague: {
          connect: {
            id: args?.workColleagueId,
          },
        },
      },
      include: {
        WorkColleague: true,
      },
    });
    if (!workColleague) {
      throw new Error("La mise en relation n'a pas pu se faire");
    }

    return workColleague.WorkColleague;
  },
};

export const deleteWorkColleague: GraphQLFieldConfig<any, any, any> = {
  args: {
    workColleagueId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  type: GraphQLBoolean,
  resolve: async (_, args, context: Context): Promise<boolean | undefined> => {
    if (!context?.user) return;

    await prisma.reseaux.delete({
      where: {
        userId_workColleagueId: {
          workColleagueId: args?.workColleagueId,
          userId: context?.user?.id,
        },
      },
    });

    return true;
  },
};

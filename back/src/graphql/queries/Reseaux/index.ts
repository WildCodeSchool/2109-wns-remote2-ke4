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

const queriesReseaux: GraphQLFieldConfigMap<any, any> = {
  getManyWorkColleague: {
    type: new GraphQLList(TypeUser),
    resolve: async (_, __, context: Context): Promise<User[]> => {
      const workColleagues = await prisma.reseaux.findMany({
        where: {
          userId: context?.user?.id,
        },
        include: {
          WorkColleague: true,
        },
      });
      return workColleagues.map((e) => e.WorkColleague);
    },
  },
};

export default queriesReseaux;

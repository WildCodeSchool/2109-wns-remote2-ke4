import { GraphQLBoolean, GraphQLFieldConfig } from 'graphql';
import prisma from '../../../lib/prisma';
import { User } from '@prisma/client';
import Context from '@tsTypes/context';
import * as fs from 'fs';
import path from 'path';
import { GraphQLUpload } from 'graphql-upload';
import { randomBytes } from 'crypto';

export const uploadAvatar: GraphQLFieldConfig<any, any, any> = {
  args: {
    file: {
      type: GraphQLUpload,
    },
  },
  type: GraphQLBoolean,
  resolve: async (
    _,
    { file },
    context: Context
  ): Promise<User | null | undefined> => {
    // if (!context?.user) return;
    const { filename } = await file;
    const nameFile = `${randomBytes(6).toString('hex')}-${filename}`;
    const pathName = path.join(__dirname, `../../../avatar/${nameFile}`);

    await fs.createWriteStream(pathName);

    const user = await prisma.user.findUnique({
      where: {
        id: 'cl1d58uii04617cbwajgwoyuc',
      },
    });
    if (user?.avatar) {
      fs.unlinkSync(path.join(__dirname, `../../../avatar/${user?.avatar}`));
    }
    const userUpdate = await prisma.user.update({
      where: {
        id: 'cl1d58uii04617cbwajgwoyuc',
      },
      data: {
        avatar: nameFile,
      },
    });

    return userUpdate;
  },
};

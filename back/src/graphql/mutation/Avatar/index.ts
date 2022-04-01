import { GraphQLFieldConfig, GraphQLNonNull, GraphQLScalarType } from 'graphql';
import prisma from '../../../lib/prisma';
import { User } from '@prisma/client';
import Context from '@tsTypes/context';
import * as fs from 'fs';
import path from 'path';
import { GraphQLUpload } from 'graphql-upload';
import { randomBytes } from 'crypto';
import { finished } from 'stream/promises';
import TypeUser from '@graphql/types/userType';

interface IFormParams {
  file: any;
}

export const uploadAvatar: GraphQLFieldConfig<any, any, any> = {
  args: {
    file: {
      type: GraphQLUpload,
    },
  },
  type: TypeUser,
  resolve: async (
    _,
    { file },
    context: Context
  ): Promise<User | null | undefined> => {
    if (!context?.user) return;
    console.log(file);

    const { filename, createReadStream } = await file;
    const stream = createReadStream();

    const nameFile = `${randomBytes(6).toString('hex')}-${filename}`;
    console.log(nameFile);

    const pathName = path.join(__dirname, `../../../avatar/${nameFile}`);
    const out = fs.createWriteStream(pathName);
    stream.pipe(out);
    await finished(stream);

    const user = await prisma.user.findUnique({
      where: {
        id: context?.user?.id,
      },
    });
    if (user?.avatar) {
      fs.unlinkSync(path.join(__dirname, `../../../avatar/${user?.avatar}`));
    }
    const userUpdate = await prisma.user.update({
      where: {
        id: context?.user?.id,
      },
      data: {
        avatar: nameFile,
      },
    });

    return userUpdate;
  },
};

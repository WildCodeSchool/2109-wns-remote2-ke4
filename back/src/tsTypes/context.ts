import { User } from '@prisma/client';

export type Context = {
  user?: User | null;
};

export default Context;

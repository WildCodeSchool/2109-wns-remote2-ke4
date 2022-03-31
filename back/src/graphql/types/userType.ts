import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import Project from './projectType';
import prisma from '../../lib/prisma';
import { User } from '@prisma/client';

const TypeUser = new GraphQLObjectType({
  name: 'TypeUser',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },

    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    pseudo: {
      type: new GraphQLNonNull(GraphQLString),
    },
    fullName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    avatar: {
      type: GraphQLString,
      resolve: async (node: User) => {
        const avatar = await prisma.user.findUnique({
          where: {
            id: node.id,
          },
        });
        return avatar ? avatar?.avatar : null;
      },
    },
    description: {
      type: GraphQLString,
    },
    role: {
      type: new GraphQLList(GraphQLString),
    },
    projects: {
      type: new GraphQLList(Project),
      resolve: async (node: User) => {
        const projects = await prisma.userProject.findMany({
          where: {
            userId: node.id,
          },
        });
        return projects || [];
      },
    },
  }),
});
export default TypeUser;

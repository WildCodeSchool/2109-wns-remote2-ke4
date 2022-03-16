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
    firstname: {
      type: new GraphQLNonNull(GraphQLString),
    },
    avatar: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
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

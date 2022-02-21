import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import prisma from '../../../lib/prisma';

interface argstype {
  // todo
}

const registerUser: GraphQLFieldConfig<any, any, any> = {
  args: {
    email: {
      type: GraphQLString,
    },
    mdp: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    firstname: {
      type: GraphQLString,
    },
    avatar: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    role: {
      type: new GraphQLList(GraphQLString),
    },
    project: {
      type: new GraphQLList(GraphQLString),
    },
    ticket: {
      type: new GraphQLList(GraphQLString),
    },
  },
  type: new GraphQLNonNull(GraphQLID),
  resolve: async (_, args) => {
    const post = await prisma.user.create({
      data: {
        email: args.email,
        mdp: args.mdp,
        name: args.name,
        firstname: args.firstname,
        avatar: args.avatar,
        description: args.description,
        role: args.role,
        projectId: args.project,
        ticketId: args.ticket,
      },
    });
    console.dir(post);
    return post.id;
  },
};

export default registerUser;

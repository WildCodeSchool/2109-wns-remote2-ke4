import {
  GraphQLEnumType,
    GraphQLFieldConfig,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
  GraphQLString,
  } from 'graphql';
  import prisma from '../../../lib/prisma';
  import TypePost from '../../types/TypePost';

  
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
        type: 
      }
    },
    type: new GraphQLNonNull(GraphQLID),
    resolve: async (_, args) => {
      const post = await prisma.user.create({
        data: {
          title: args.title,
          body: args.body,
        },
      });
      console.dir(post);
      return post.id;
    },
  };
  export default registerPost;
  
  
  
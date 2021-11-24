import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import prisma from "../../../lib/prisma";
import TypePost from "../../types/TypePost";

const registerPost: GraphQLFieldConfig<any, any, any> = {
  args: {
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
  },
  type: new GraphQLNonNull(GraphQLID),
  resolve: async (_, args) => {
    const post = await prisma.post.create({
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

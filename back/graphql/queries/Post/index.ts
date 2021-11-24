import prisma from "../../../lib/prisma";
import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import TypePost from "../../types/TypePost";

const queriesPost: GraphQLFieldConfigMap<any, any> = {
  getPostById: {
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    type: new GraphQLNonNull(TypePost),
    resolve: async (_, args) => {
      const post = await prisma.post.findUnique({
        where: {
          id: args.id,
        },
      });
      console.dir(post);
      return post || null;
    },
  },
  getPost: {
    type: new GraphQLNonNull(new GraphQLList(TypePost)),
    resolve: async () => {
      const posts = await prisma.post.findMany();
      console.dir(posts);
      return posts || [];
    },
  },
};
export default queriesPost;

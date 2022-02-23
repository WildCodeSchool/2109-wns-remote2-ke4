import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const Project: any = new GraphQLObjectType({
  name: 'project',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
    ticketsId: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    client: {
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    user: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    investedTime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    estimatedTime: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
export default Project;

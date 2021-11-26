import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const User = new GraphQLObjectType({
  name: 'comment',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    mdp: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
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
    project: {
      // A REVOIR
      type: new GraphQLNonNull(GraphQLString),
    },
    ticket: {
      // A REVOIR
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
export default User;

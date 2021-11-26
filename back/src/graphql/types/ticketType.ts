import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import User from './userType';

const Ticket = new GraphQLObjectType({
  name: 'comment',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    project: {
      // A REVOIR
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    user: {
      type: new GraphQLNonNull(new GraphQLList(User)),
    },
    ressources: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
  }),
});
export default Ticket;

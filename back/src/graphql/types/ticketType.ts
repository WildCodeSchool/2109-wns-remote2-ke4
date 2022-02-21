import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const Ticket: any = new GraphQLObjectType({
  name: 'ticket',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    projectId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    userId: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    ressources: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    /* project: {
      type: new GraphQLList(Project),
      resolve: async (node) => {
        const project = await prisma.project.findUnique({
          where: {
            id: node.projectId,
          },
        });
        return project;
      },
    }, */
  }),
});
export default Ticket;

import { GraphQLObjectType } from 'graphql';
import queriesComment from './Comment/commentQueries';
import queriesProject from './Project/projectQueries';
import queriesTicket from './Ticket/ticketQueries';
import queriesUser from './User/userQueries';

const queries = new GraphQLObjectType({
  name: 'RootQueries',
  description: 'Queries of tzar',
  fields: () => ({
    ...queriesComment,
    ...queriesProject,
    ...queriesTicket,
    ...queriesUser,
  }),
});
export default queries;

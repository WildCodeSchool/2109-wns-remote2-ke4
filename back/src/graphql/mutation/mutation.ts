import { GraphQLObjectType } from 'graphql/type';
import registerComment from './Comment/commentMutations';
import registerUser from './User/userMutations';
import registerTicket from './Ticket/ticketMutations';
import registerProject from './Project/projectMutations';

const mutations = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Mutations of Ke4',
  // @ts-ignore
  fields: () => ({
    registerComment,
    registerUser,
    registerTicket,
    registerProject,
  }),
});
export default mutations;

import { GraphQLObjectType } from 'graphql/type';
import {
  registerComment,
  updateCommentById,
  deleteCommentById,
} from './Comment/commentMutations';
import {
  registerUser,
  updateUserById,
  deleteUserById,
} from './User/userMutations';
import {
  registerTicket,
  updateTicketById,
  deleteTicketById,
} from './Ticket/ticketMutations';
import {
  registerProject,
  updateProjectByID,
  deleteProjectById,
} from './Project/projectMutations';

const mutations = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Mutations of Ke4',
  // @ts-ignore
  fields: () => ({
    registerComment,
    updateCommentById,
    deleteCommentById,

    registerUser,
    updateUserById,
    deleteUserById,

    registerTicket,
    updateTicketById,
    deleteTicketById,

    registerProject,
    updateProjectByID,
    deleteProjectById,
  }),
});
export default mutations;

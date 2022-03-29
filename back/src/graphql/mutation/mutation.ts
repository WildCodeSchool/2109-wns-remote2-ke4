import { GraphQLObjectType } from 'graphql/type';
import { createComment, deleteComment } from './Comment/commentMutations';
import { registerUser, updateUser, deleteUser } from './User/userMutations';
import {
  createTicket,
  updateTicket,
  deleteTicket,
} from './Ticket/ticketMutations';
import {
  createProject,
  updateProject,
  deleteProject,
  projectFav,
} from './Project/projectMutations';
import { login } from './Login';
import {
  passwordForgot,
  resetPassword,
  resetPasswordViewer,
} from './PasswordForgot';

const mutations = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Mutations of Ke4',
  // @ts-ignore
  fields: () => ({
    createComment,
    deleteComment,

    registerUser,
    updateUser,
    deleteUser,

    createTicket,
    updateTicket,
    deleteTicket,

    createProject,
    updateProject,
    deleteProject,
    projectFav,

    login,
    passwordForgot,
    resetPassword,
    resetPasswordViewer,
  }),
});
export default mutations;

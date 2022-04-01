"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("graphql/type");
const commentMutations_1 = require("./Comment/commentMutations");
const userMutations_1 = require("./User/userMutations");
const ticketMutations_1 = require("./Ticket/ticketMutations");
const projectMutations_1 = require("./Project/projectMutations");
const Login_1 = require("./Login");
const PasswordForgot_1 = require("./PasswordForgot");
const mutations = new type_1.GraphQLObjectType({
    name: 'RootMutation',
    description: 'Mutations of Ke4',
    // @ts-ignore
    fields: () => ({
        createComment: commentMutations_1.createComment,
        deleteComment: commentMutations_1.deleteComment,
        registerUser: userMutations_1.registerUser,
        updateUser: userMutations_1.updateUser,
        deleteUser: userMutations_1.deleteUser,
        createTicket: ticketMutations_1.createTicket,
        updateTicket: ticketMutations_1.updateTicket,
        deleteTicket: ticketMutations_1.deleteTicket,
        createProject: projectMutations_1.createProject,
        updateProject: projectMutations_1.updateProject,
        deleteProject: projectMutations_1.deleteProject,
        projectFav: projectMutations_1.projectFav,
        login: Login_1.login,
        passwordForgot: PasswordForgot_1.passwordForgot,
        resetPassword: PasswordForgot_1.resetPassword,
        resetPasswordViewer: PasswordForgot_1.resetPasswordViewer,
    }),
});
exports.default = mutations;
//# sourceMappingURL=mutation.js.map
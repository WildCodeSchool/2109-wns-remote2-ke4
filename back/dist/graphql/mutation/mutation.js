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
        registerComment: commentMutations_1.registerComment,
        updateCommentById: commentMutations_1.updateCommentById,
        deleteCommentById: commentMutations_1.deleteCommentById,
        registerUser: userMutations_1.registerUser,
        updateUserById: userMutations_1.updateUserById,
        deleteUserById: userMutations_1.deleteUserById,
        registerTicket: ticketMutations_1.registerTicket,
        updateTicketById: ticketMutations_1.updateTicketById,
        deleteTicketById: ticketMutations_1.deleteTicketById,
        registerProject: projectMutations_1.registerProject,
        updateProjectByID: projectMutations_1.updateProjectByID,
        deleteProjectById: projectMutations_1.deleteProjectById,
        projectFav: projectMutations_1.projectFav,
        login: Login_1.login,
        passwordForgot: PasswordForgot_1.passwordForgot,
        resetPassword: PasswordForgot_1.resetPassword,
    }),
});
exports.default = mutations;
//# sourceMappingURL=mutation.js.map
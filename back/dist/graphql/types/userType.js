"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const projectType_1 = __importDefault(require("./projectType"));
const prisma_1 = __importDefault(require("../../lib/prisma"));
const User = new graphql_1.GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
        },
        email: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        mdp: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        lastName: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        firstname: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        avatar: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        description: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        role: {
            type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(graphql_1.GraphQLString)),
        },
        projects: {
            type: new graphql_1.GraphQLList(projectType_1.default),
            resolve: (node) => __awaiter(void 0, void 0, void 0, function* () {
                const projects = yield prisma_1.default.userProject.findMany({
                    where: {
                        userId: node.id,
                    },
                });
                return projects || [];
            }),
        },
    }),
});
exports.default = User;
//# sourceMappingURL=userType.js.map
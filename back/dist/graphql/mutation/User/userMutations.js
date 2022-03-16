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
exports.deleteUserById = exports.updateUserById = exports.registerUser = void 0;
const graphql_1 = require("graphql");
const userType_1 = __importDefault(require("../../types/userType"));
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../../../joi/User");
const index_1 = require("../../../config/index");
exports.registerUser = {
    args: {
        email: {
            type: graphql_1.GraphQLString,
        },
        mdp: {
            type: graphql_1.GraphQLString,
        },
        lastName: {
            type: graphql_1.GraphQLString,
        },
        firstname: {
            type: graphql_1.GraphQLString,
        },
        avatar: {
            type: graphql_1.GraphQLString,
        },
        description: {
            type: graphql_1.GraphQLString,
        },
    },
    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        (0, User_1.registerUserSchema)(args);
        const salt = bcrypt_1.default.genSaltSync(10);
        const hashMdp = bcrypt_1.default.hashSync(args.mdp, salt);
        const user = yield prisma_1.default.user.create({
            data: {
                email: args.email,
                mdp: hashMdp,
                lastName: args.lastName,
                firstname: args.firstname,
                avatar: args.avatar,
                description: args.description,
            },
        });
        if (!user) {
            throw new Error("L'utilisateur n'a pas été créer");
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, index_1.JWT_LOGIN_SECRET);
        return token;
    }),
};
exports.updateUserById = {
    args: {
        id: {
            type: graphql_1.GraphQLID,
        },
        email: {
            type: graphql_1.GraphQLString,
        },
        mdp: {
            type: graphql_1.GraphQLString,
        },
        lastName: {
            type: graphql_1.GraphQLString,
        },
        firstname: {
            type: graphql_1.GraphQLString,
        },
        avatar: {
            type: graphql_1.GraphQLString,
        },
        description: {
            type: graphql_1.GraphQLString,
        },
        role: {
            type: graphql_1.GraphQLString,
        },
        project: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
        },
        ticket: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
        },
    },
    type: new graphql_1.GraphQLNonNull(userType_1.default),
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma_1.default.user.update({
            where: {
                id: args.id,
            },
            data: {
                email: args.email,
                mdp: args.mdp,
                lastName: args.lastName,
                firstname: args.firstname,
                avatar: args.avatar,
                description: args.description,
                role: args.role,
            },
        });
    }),
};
exports.deleteUserById = {
    args: {
        id: {
            type: graphql_1.GraphQLID,
        },
    },
    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma_1.default.userTicket.deleteMany({
            where: {
                userId: args.id,
            },
        });
        yield prisma_1.default.userProject.deleteMany({
            where: {
                userId: args.id,
            },
        });
        yield prisma_1.default.user.delete({
            where: {
                id: args.id,
            },
        });
        return true;
    }),
};
//# sourceMappingURL=userMutations.js.map
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
const userType_1 = __importDefault(require("../../types/userType"));
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const queriesUser = {
    getAllUsers: {
        type: new graphql_1.GraphQLList(userType_1.default),
        resolve: () => __awaiter(void 0, void 0, void 0, function* () {
            const users = yield prisma_1.default.user.findMany();
            return users || [];
        }),
    },
    getUserById: {
        args: {
            id: {
                type: graphql_1.GraphQLID,
            },
        },
        type: new graphql_1.GraphQLNonNull(userType_1.default),
        resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    id: args.id,
                },
            });
            return user;
        }),
    },
    getViewer: {
        type: userType_1.default,
        resolve: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context.user)
                return;
            const viewer = yield prisma_1.default.user.findUnique({
                where: {
                    id: context.user.id,
                },
            });
            return viewer || null;
        }),
    },
};
exports.default = queriesUser;
//# sourceMappingURL=userQueries.js.map
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
exports.deleteComment = exports.createComment = void 0;
const graphql_1 = require("graphql");
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const commentType_1 = __importDefault(require("../../types/commentType"));
exports.createComment = {
    args: {
        postDate: {
            type: graphql_1.GraphQLString,
        },
        content: {
            type: graphql_1.GraphQLString,
        },
        ticketId: {
            type: graphql_1.GraphQLString,
        },
    },
    type: commentType_1.default,
    resolve: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        if (!context.user)
            return;
        const comment = yield prisma_1.default.comment.create({
            data: {
                postDate: args.postDate,
                content: args.content,
                userId: context.user.id,
                ticketId: args.ticketId,
            },
        });
        return comment;
    }),
};
exports.deleteComment = {
    args: {
        id: {
            type: graphql_1.GraphQLID,
        },
    },
    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma_1.default.comment.delete({
            where: {
                id: args.id,
            },
        });
        return true;
    }),
};
//# sourceMappingURL=commentMutations.js.map
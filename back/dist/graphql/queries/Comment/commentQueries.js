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
const commentType_1 = __importDefault(require("../../types/commentType"));
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const queriesComment = {
    getAllCommentsByTicketId: {
        args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
        type: new graphql_1.GraphQLList(commentType_1.default),
        resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const comments = yield prisma_1.default.comment.findMany({
                where: {
                    ticketId: args === null || args === void 0 ? void 0 : args.id,
                },
                orderBy: {
                    postDate: 'desc',
                },
            });
            return comments || [];
        }),
    },
};
exports.default = queriesComment;
//# sourceMappingURL=commentQueries.js.map
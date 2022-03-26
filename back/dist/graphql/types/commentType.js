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
const userType_1 = __importDefault(require("./userType"));
const prisma_1 = __importDefault(require("../../lib/prisma"));
const TypeComment = new graphql_1.GraphQLObjectType({
    name: 'TypeComment',
    fields: () => ({
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
        },
        postDate: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        content: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        author: {
            type: new graphql_1.GraphQLNonNull(userType_1.default),
            resolve: (node) => __awaiter(void 0, void 0, void 0, function* () {
                const comment = yield prisma_1.default.comment.findUnique({
                    where: {
                        id: node.id,
                    },
                });
                const author = yield prisma_1.default.user.findUnique({
                    where: {
                        id: comment === null || comment === void 0 ? void 0 : comment.userId,
                    },
                });
                return author || null;
            }),
        },
    }),
});
exports.default = TypeComment;
//# sourceMappingURL=commentType.js.map
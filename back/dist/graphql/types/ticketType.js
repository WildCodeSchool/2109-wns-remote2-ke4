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
const Ticket = new graphql_1.GraphQLObjectType({
    name: 'ticket',
    fields: () => ({
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
        },
        name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        status: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        description: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        ressources: {
            type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(graphql_1.GraphQLString)),
        },
        priority: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
        devs: {
            type: new graphql_1.GraphQLList(userType_1.default),
            resolve: (node) => __awaiter(void 0, void 0, void 0, function* () {
                const devs = yield prisma_1.default.userTicket.findMany({
                    where: {
                        ticketId: node.id,
                    },
                });
                return devs || [];
            }),
        },
    }),
});
exports.default = Ticket;
//# sourceMappingURL=ticketType.js.map
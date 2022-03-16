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
exports.deleteTicketById = exports.updateTicketById = exports.registerTicket = void 0;
const GraphQlDate_1 = __importDefault(require("@graphql/GraphQlDate"));
const graphql_1 = require("graphql");
const prisma_1 = __importDefault(require("../../../lib/prisma"));
exports.registerTicket = {
    args: {
        name: {
            type: graphql_1.GraphQLString,
        },
        project: {
            type: graphql_1.GraphQLString,
        },
        description: {
            type: graphql_1.GraphQLString,
        },
        user: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
        },
        estimatedTime: {
            type: graphql_1.GraphQLString,
        },
        startDate: {
            type: GraphQlDate_1.default,
        },
        endDate: {
            type: GraphQlDate_1.default,
        },
        ressources: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
        },
        priority: {
            type: new graphql_1.GraphQLEnumType({
                name: 'EnumProrityTicket',
                values: {
                    IMPORTANT: { value: 'IMPORTANT' },
                    LIGHT: { value: 'LIGHT' },
                    MEDIUM: { value: 'MEDIUM' },
                },
            }),
        },
    },
    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        const ticket = yield prisma_1.default.ticket.create({
            data: {
                name: args.name,
                projectId: args.project,
                status: args.status,
                description: args.description,
                investedTime: args.investedTime,
                estimatedTime: args.estimatedTime,
                startDate: args.startDate,
                endDate: args.endDate,
                ressources: args.ressources,
                priority: args.priority,
            },
        });
        for (const userId of args.user) {
            yield prisma_1.default.userTicket.create({
                data: {
                    ticketId: ticket.id,
                    userId: userId,
                },
            });
        }
        return ticket.id;
    }),
};
exports.updateTicketById = {
    args: {
        id: {
            type: graphql_1.GraphQLID,
        },
        name: {
            type: graphql_1.GraphQLString,
        },
        status: {
            type: graphql_1.GraphQLString,
        },
        description: {
            type: graphql_1.GraphQLString,
        },
        ressources: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
        },
        priority: {
            type: graphql_1.GraphQLString,
        },
        users: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
        },
    },
    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        const ticket = yield prisma_1.default.ticket.update({
            where: {
                id: args.id,
            },
            data: {
                name: args.name,
                projectId: args.projectId,
                status: args.status,
                description: args.description,
                ressources: args.ressources,
                priority: args.priority,
            },
        });
        yield prisma_1.default.userTicket.deleteMany({
            where: {
                ticketId: ticket.id,
            },
        });
        for (const userId of args.users) {
            yield prisma_1.default.userTicket.create({
                data: {
                    ticketId: ticket.id,
                    userId: userId,
                },
            });
        }
        return ticket.id;
    }),
};
exports.deleteTicketById = {
    args: {
        id: {
            type: graphql_1.GraphQLID,
        },
    },
    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma_1.default.userTicket.deleteMany({
            where: {
                ticketId: args === null || args === void 0 ? void 0 : args.id,
            },
        });
        yield prisma_1.default.ticket.delete({
            where: {
                id: args.id,
            },
        });
        return true;
    }),
};
//# sourceMappingURL=ticketMutations.js.map
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
exports.deleteTicket = exports.updateTicket = exports.createTicket = void 0;
const graphql_1 = require("graphql");
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const ticketType_1 = __importDefault(require("../../types/ticketType"));
exports.createTicket = {
    args: {
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
            type: new graphql_1.GraphQLEnumType({
                name: 'EnumProrityTicket',
                values: {
                    IMPORTANT: { value: 'IMPORTANT' },
                    LIGHT: { value: 'LIGHT' },
                    MEDIUM: { value: 'MEDIUM' },
                },
            }),
        },
        users: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
        },
        progress: {
            type: graphql_1.GraphQLInt,
        },
        projectId: {
            type: graphql_1.GraphQLString,
        },
    },
    type: ticketType_1.default,
    resolve: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!(context === null || context === void 0 ? void 0 : context.user))
            return;
        const ticket = yield prisma_1.default.ticket.create({
            data: {
                name: args.name,
                status: args.status,
                description: args.description,
                ressources: args.ressources,
                priority: args.priority,
                progress: args.progress,
                endDate: args.endDate,
                investedTime: args.investedTime,
                estimatedTime: args.estimatedTime,
                startDate: args === null || args === void 0 ? void 0 : args.startDate,
                createdAt: (_a = context === null || context === void 0 ? void 0 : context.user) === null || _a === void 0 ? void 0 : _a.id,
                projectId: args === null || args === void 0 ? void 0 : args.projectId,
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
        return ticket;
    }),
};
exports.updateTicket = {
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
            type: new graphql_1.GraphQLEnumType({
                name: 'EnumProrityTicketUpdate',
                values: {
                    IMPORTANT: { value: 'IMPORTANT' },
                    LIGHT: { value: 'LIGHT' },
                    MEDIUM: { value: 'MEDIUM' },
                },
            }),
        },
        users: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
        },
        progress: {
            type: graphql_1.GraphQLInt,
        },
    },
    type: ticketType_1.default,
    resolve: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        if (!(context === null || context === void 0 ? void 0 : context.user))
            return;
        const ticket = yield prisma_1.default.ticket.update({
            where: {
                id: args.id,
            },
            data: {
                name: args.name,
                status: args.status,
                description: args.description,
                ressources: args.ressources,
                priority: args.priority,
                progress: args.progress,
                endDate: args.endDate,
                investedTime: args.investedTime,
                estimatedTime: args.estimatedTime,
                startDate: args === null || args === void 0 ? void 0 : args.startDate,
                updatedBy: (_b = context === null || context === void 0 ? void 0 : context.user) === null || _b === void 0 ? void 0 : _b.id,
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
        return ticket;
    }),
};
exports.deleteTicket = {
    args: {
        id: {
            type: graphql_1.GraphQLID,
        },
    },
    type: graphql_1.GraphQLBoolean,
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
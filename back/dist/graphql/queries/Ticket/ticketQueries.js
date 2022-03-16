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
const ticketType_1 = __importDefault(require("../../types/ticketType"));
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const queriesTicket = {
    getAllTickets: {
        type: new graphql_1.GraphQLList(ticketType_1.default),
        resolve: () => __awaiter(void 0, void 0, void 0, function* () {
            const tickets = prisma_1.default.ticket.findMany();
            return tickets || [];
        }),
    },
    getTicketById: {
        args: {
            id: {
                type: graphql_1.GraphQLID,
            },
        },
        type: new graphql_1.GraphQLNonNull(ticketType_1.default),
        resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma_1.default.ticket.findUnique({
                where: {
                    id: args.id,
                },
            });
        }),
    },
    getAllTicketsByProjectId: {
        args: {
            id: {
                type: graphql_1.GraphQLID,
            },
        },
        type: ticketType_1.default,
        resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const tickets = yield prisma_1.default.ticket.findMany({
                where: {
                    projectId: args.id,
                },
            });
            return tickets || [];
        }),
    },
};
exports.default = queriesTicket;
//# sourceMappingURL=ticketQueries.js.map
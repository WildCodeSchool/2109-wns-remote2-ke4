"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const commentQueries_1 = __importDefault(require("./Comment/commentQueries"));
const projectQueries_1 = __importDefault(require("./Project/projectQueries"));
const ticketQueries_1 = __importDefault(require("./Ticket/ticketQueries"));
const userQueries_1 = __importDefault(require("./User/userQueries"));
const queries = new graphql_1.GraphQLObjectType({
    name: 'RootQueries',
    description: 'Queries of tzar',
    fields: () => (Object.assign(Object.assign(Object.assign(Object.assign({}, commentQueries_1.default), projectQueries_1.default), ticketQueries_1.default), userQueries_1.default)),
});
exports.default = queries;
//# sourceMappingURL=query.js.map
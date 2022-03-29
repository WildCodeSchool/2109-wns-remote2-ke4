"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const mutation_1 = __importDefault(require("./mutation/mutation"));
const query_1 = __importDefault(require("./queries/query"));
const schema = new graphql_1.GraphQLSchema({
    query: query_1.default,
    mutation: mutation_1.default,
});
exports.default = schema;
//# sourceMappingURL=graphql.js.map
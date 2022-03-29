"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const GraphQLDate = new graphql_1.GraphQLScalarType({
    name: 'Date',
    /**
     * Serialize date value into string
     * @param  {Date} value date value
     * @return {String} date as string
     */
    serialize: function (value) {
        if (!(value instanceof Date)) {
            //@ts-ignore
            return new Date(value).toJSON();
        }
        return value.toJSON();
    },
    /**
     * Parse value into date
     * @param  {*} value serialized date value
     * @return {Date} date value
     */
    parseValue: (value) => {
        //@ts-ignore
        let date = new Date(value);
        return date;
    },
    /**
     * Parse ast literal to date
     * @param  {Object} ast graphql ast
     * @return {Date} date value
     */
    parseLiteral: (ast) => {
        let result = new Date(ast.value);
        return result;
    },
});
exports.default = GraphQLDate;
//# sourceMappingURL=GraphQlDate.js.map
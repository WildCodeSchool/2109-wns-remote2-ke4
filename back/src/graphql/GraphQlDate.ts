import { GraphQLScalarType } from 'graphql';

const GraphQLDate = new GraphQLScalarType({
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
  parseValue: (value): Date => {
    //@ts-ignore
    let date = new Date(value);

    return date;
  },
  /**
   * Parse ast literal to date
   * @param  {Object} ast graphql ast
   * @return {Date} date value
   */
  parseLiteral: (ast: any): Date => {
    let result = new Date(ast.value);

    return result;
  },
});
export default GraphQLDate;

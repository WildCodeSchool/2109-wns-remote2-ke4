"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// @ts-ignore
const registerUserSchema = (args) => {
    const schema = joi_1.default.object({
        firstName: joi_1.default.string().required(),
        name: joi_1.default.string().required(),
        email: joi_1.default.string().email().required(),
        mdp: joi_1.default.string()
            .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'))
            .min(8)
            .max(32)
            .required(),
        description: joi_1.default.string(),
    }).validate(args, { abortEarly: false }).error;
    if (schema) {
        throw new Error('Les données entrer sont incorrect');
    }
};
exports.registerUserSchema = registerUserSchema;
//# sourceMappingURL=User.js.map
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
exports.login = void 0;
const graphql_1 = require("graphql");
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = require("../../../config/index");
exports.login = {
    args: {
        email: {
            type: graphql_1.GraphQLString,
        },
        mdp: {
            type: graphql_1.GraphQLString,
        },
    },
    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prisma_1.default.user.findUnique({
            where: {
                email: args.email,
            },
        });
        if (!user) {
            throw new Error("L'email ne correspond à aucun utilisateur");
        }
        const mdpIsCorrect = yield bcrypt_1.default.compare(args.mdp, user.mdp);
        if (!mdpIsCorrect) {
            throw new Error('Le mot de passe est incorrect');
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, index_1.JWT_LOGIN_SECRET);
        return token;
    }),
};
//# sourceMappingURL=index.js.map
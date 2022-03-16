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
exports.resetPassword = exports.passwordForgot = void 0;
const graphql_1 = require("graphql");
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = require("../../../config/index");
const nodemailer_1 = require("../../../lib/nodemailer");
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.passwordForgot = {
    args: {
        email: {
            type: graphql_1.GraphQLString,
        },
    },
    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prisma_1.default.user.findUnique({
            where: {
                email: args.email,
            },
        });
        if (!user) {
            throw new Error("L'email ne correspond à aucun utilisateur");
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, index_1.JWT_LOGIN_SECRET);
        yield (0, nodemailer_1.sendEmail)({
            to: user.email,
            subject: 'Réinitialisation du mot de passe',
            text: `Bonjour, Veuillez cliquez sur ce lien pour mettre à jour votre nouveau mot de passe: http://localhost:3000/login`,
            html: `<p>Bonjour<br /><br />Veuillez cliquez sur ce lien pour mettre à jour votre nouveau mot de passe: <a href='http://localhost:3000/login/${encodeURIComponent(token)}'>http://localhost:3000/login</a></p>`,
        });
        return true;
    }),
};
exports.resetPassword = {
    args: {
        tokenURL: {
            type: graphql_1.GraphQLString,
        },
        newMdp: {
            type: graphql_1.GraphQLString,
        },
    },
    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        const { newMdp, tokenURL } = args;
        const schemaResetMdp = joi_1.default.object({
            tokenURL: joi_1.default.string().required(),
            newMdp: joi_1.default.string().required(),
        }).validate({ newMdp, tokenURL }, { abortEarly: false }).error;
        if (schemaResetMdp) {
            throw new Error('Les données entrer sont incorrect');
        }
        const salt = bcrypt_1.default.genSaltSync(10);
        const hashPassword = bcrypt_1.default.hashSync(newMdp, salt);
        const decodedToken = jsonwebtoken_1.default.verify(tokenURL, index_1.JWT_LOGIN_SECRET);
        const user = yield prisma_1.default.user.findUnique({
            where: {
                //@ts-ignore
                id: decodedToken.userId,
            },
        });
        if (!user) {
            return null;
        }
        yield prisma_1.default.user.update({
            where: {
                id: user.id,
            },
            data: {
                mdp: hashPassword,
            },
        });
        return true;
    }),
};
//# sourceMappingURL=index.js.map
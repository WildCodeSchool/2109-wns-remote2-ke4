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
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const graphql_1 = __importDefault(require("./graphql/graphql"));
const prisma_1 = __importDefault(require("./lib/prisma"));
const config_1 = require("./config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const module_alias_1 = __importDefault(require("module-alias"));
const path_1 = __importDefault(require("path"));
module_alias_1.default.addAliases({
    '@lib': path_1.default.join(__dirname, 'lib'),
    '@graphql': path_1.default.join(__dirname, '/graphql'),
    '@tsTypes': path_1.default.join(__dirname, '/tsTypes'),
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const apolloServer = new apollo_server_express_1.ApolloServer({
            schema: graphql_1.default,
            context: ({ req }) => __awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                if ((_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) {
                    const token = (((_b = req.headers) === null || _b === void 0 ? void 0 : _b.authorization) || '').replace('Bearer ', '');
                    try {
                        const decoded = jsonwebtoken_1.default.verify(token, config_1.JWT_LOGIN_SECRET);
                        //@ts-ignore
                        if (!decoded || !decoded.userId)
                            return {};
                        const user = yield prisma_1.default.user.findUnique({
                            where: {
                                //@ts-ignore
                                id: decoded.userId,
                            },
                        });
                        if (!user)
                            return {};
                        return { user };
                    }
                    catch (err) {
                        return {};
                    }
                }
            }),
        });
        yield apolloServer.start();
        apolloServer.applyMiddleware({ app, path: '/graphql' });
    });
}
startApolloServer();
app.listen(process.env.PORT || 4000, () => {
    console.log(`Its ready at http://localhost:${process.env.PORT || 4000}`);
});
//# sourceMappingURL=server.js.map
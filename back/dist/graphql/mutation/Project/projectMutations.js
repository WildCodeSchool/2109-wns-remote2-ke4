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
exports.projectFav = exports.deleteProject = exports.updateProject = exports.createProject = void 0;
const graphql_1 = require("graphql");
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const projectType_1 = __importDefault(require("../../types/projectType"));
exports.createProject = {
    args: {
        name: {
            type: graphql_1.GraphQLString,
        },
        author: {
            type: graphql_1.GraphQLString,
        },
        client: {
            type: graphql_1.GraphQLString,
        },
        status: {
            type: graphql_1.GraphQLString,
        },
        description: {
            type: graphql_1.GraphQLString,
        },
        user: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLID),
        },
        date: {
            type: graphql_1.GraphQLString,
        },
        investedTime: {
            type: graphql_1.GraphQLString,
        },
        estimatedTime: {
            type: graphql_1.GraphQLString,
        },
    },
    type: projectType_1.default,
    resolve: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!(context === null || context === void 0 ? void 0 : context.user))
            return;
        const project = yield prisma_1.default.project.create({
            data: {
                name: args.name,
                author: args.author,
                client: args.client,
                status: args.status,
                description: args.description,
                date: args.date,
                investedTime: args.investedTime,
                estimatedTime: args.estimatedTime,
                createdBy: (_a = context === null || context === void 0 ? void 0 : context.user) === null || _a === void 0 ? void 0 : _a.id,
            },
        });
        for (const userId of args.users) {
            yield prisma_1.default.userProject.create({
                data: {
                    userId: userId,
                    projectId: project.id,
                },
            });
        }
        return project;
    }),
};
exports.updateProject = {
    args: {
        id: {
            type: graphql_1.GraphQLID,
        },
        name: {
            type: graphql_1.GraphQLString,
        },
        author: {
            type: graphql_1.GraphQLString,
        },
        client: {
            type: graphql_1.GraphQLString,
        },
        status: {
            type: graphql_1.GraphQLString,
        },
        description: {
            type: graphql_1.GraphQLString,
        },
        user: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLID),
        },
        date: {
            type: graphql_1.GraphQLString,
        },
        investedTime: {
            type: graphql_1.GraphQLString,
        },
        estimatedTime: {
            type: graphql_1.GraphQLString,
        },
    },
    type: projectType_1.default,
    resolve: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        if (!(context === null || context === void 0 ? void 0 : context.user))
            return;
        const project = yield prisma_1.default.project.update({
            where: {
                id: args.id,
            },
            data: {
                name: args.name,
                author: args.author,
                client: args.client,
                status: args.status,
                description: args.description,
                date: args.date,
                investedTime: args.investedTime,
                estimatedTime: args.estimatedTime,
                updatedBy: (_b = context === null || context === void 0 ? void 0 : context.user) === null || _b === void 0 ? void 0 : _b.id,
            },
        });
        yield prisma_1.default.userProject.deleteMany({
            where: {
                projectId: project.id,
            },
        });
        for (const userId of args.users) {
            yield prisma_1.default.userProject.create({
                data: {
                    userId: userId,
                    projectId: project.id,
                },
            });
        }
        return project;
    }),
};
exports.deleteProject = {
    args: {
        id: {
            type: graphql_1.GraphQLID,
        },
    },
    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
    resolve: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        if (!context.user)
            return;
        const project = yield prisma_1.default.project.findUnique({
            where: {
                id: args.id,
            },
        });
        if ((project === null || project === void 0 ? void 0 : project.author) !== context.user.id) {
            throw new Error("Vous ne pouvez supprimer ce projet car vous n'etes pas l'autheur");
        }
        yield prisma_1.default.userProject.deleteMany({
            where: {
                projectId: project.id,
            },
        });
        yield prisma_1.default.project.delete({
            where: {
                id: args.id,
            },
        });
        return true;
    }),
};
exports.projectFav = {
    args: {
        projectId: {
            type: graphql_1.GraphQLID,
        },
        isFavorite: {
            type: graphql_1.GraphQLBoolean,
        },
    },
    type: projectType_1.default,
    resolve: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        if (!context.user)
            return;
        const project = yield prisma_1.default.userProject.update({
            where: {
                userId_projectId: {
                    userId: (_c = context === null || context === void 0 ? void 0 : context.user) === null || _c === void 0 ? void 0 : _c.id,
                    projectId: args.projectId,
                },
            },
            data: {
                isFavorite: args === null || args === void 0 ? void 0 : args.isFavorite,
            },
        });
        return project;
    }),
};
//# sourceMappingURL=projectMutations.js.map
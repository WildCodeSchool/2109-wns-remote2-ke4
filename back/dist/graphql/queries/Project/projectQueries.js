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
const projectType_1 = __importDefault(require("../../types/projectType"));
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const queriesProject = {
    getAllProjects: {
        type: new graphql_1.GraphQLList(projectType_1.default),
        resolve: () => __awaiter(void 0, void 0, void 0, function* () {
            const projects = yield prisma_1.default.project.findMany();
            return projects || [];
        }),
    },
    getProjectById: {
        args: {
            id: {
                type: graphql_1.GraphQLID,
            },
        },
        type: new graphql_1.GraphQLNonNull(projectType_1.default),
        resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma_1.default.project.findUnique({
                where: {
                    id: args.id,
                },
            });
        }),
    },
    getAllProjectsByUserId: {
        args: {
            id: {
                type: graphql_1.GraphQLID,
            },
        },
        type: projectType_1.default,
        resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const projects = yield prisma_1.default.userProject.findMany({
                where: {
                    userId: args === null || args === void 0 ? void 0 : args.id,
                },
            });
            return projects || [];
        }),
    },
    getAllProjectsByViewer: {
        args: {
            id: {
                type: graphql_1.GraphQLID,
            },
        },
        type: projectType_1.default,
        resolve: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            if (!context.user)
                return;
            const projects = yield prisma_1.default.userProject.findMany({
                where: {
                    userId: context.user.id,
                },
            });
            return projects || [];
        }),
    },
};
exports.default = queriesProject;
//# sourceMappingURL=projectQueries.js.map
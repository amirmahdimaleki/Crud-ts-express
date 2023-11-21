"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postModel = exports.PostSchemaValidate = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
// ^ joi
exports.PostSchemaValidate = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    author: joi_1.default.string().required(),
    isPublished: joi_1.default.boolean().required(),
});
// ^ schema 
const postSchema = new mongoose_1.Schema({
    title: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: false
    }
});
exports.postModel = (0, mongoose_1.model)('postModel', postSchema);

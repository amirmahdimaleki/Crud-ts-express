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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const services_1 = require("../Services/services");
const models_1 = require("../Models/models");
class postController {
    constructor() {
        this.addPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = {
                title: req.body.title,
                description: req.body.description,
                isPublished: req.body.isPublished,
                author: req.body.author
            };
            const { error, value } = models_1.PostSchemaValidate.validate(data);
            if (error) {
                res.send(error.message);
            }
            else {
                const post = yield services_1.postServices.createPost(value);
                res.status(201).send(post);
            }
        });
        this.getAllPosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allPosts = yield services_1.postServices.getAllPosts();
            res.send(allPosts);
        });
        this.getSinglePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const singlePost = yield services_1.postServices.getSinglePost(req.params.id);
            res.send(singlePost);
        });
        this.updatePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = yield services_1.postServices.updatePost(req.params.id, req.body);
            res.send(post);
        });
        this.deletePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield services_1.postServices.deletePost(req.params.id);
            res.send(`post with id of ${req.params.id} was deleted`);
        });
    }
}
exports.PostController = new postController();

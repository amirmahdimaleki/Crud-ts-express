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
exports.postServices = void 0;
const models_1 = require("../Models/models");
class postService {
    // * create post
    createPost(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPost = yield models_1.postModel.create(data);
                return newPost;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    // * get all posts
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allPosts = models_1.postModel.find({});
                return allPosts;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    // * get a single post 
    getSinglePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const singlePost = yield models_1.postModel.findById({ _id: id });
                if (!singlePost) {
                    throw new Error('Post with this id does not exist');
                }
                return singlePost;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    // * update a post 
    updatePost(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedPost = yield models_1.postModel.findOneAndUpdate({ _id: id }, data, { new: true });
                if (!updatedPost) {
                    throw new Error('Post with this id does not exist');
                }
                return updatedPost;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    // * delete a post 
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedPost = yield models_1.postModel.findByIdAndDelete(id);
                if (!deletedPost) {
                    throw new Error('Post with this id does not exist');
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.postServices = new postService();

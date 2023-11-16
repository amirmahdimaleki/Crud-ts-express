import express from 'express'
import { PostController } from '../Controllers/controllers'

export const router = express.Router()

router.post('/', PostController.addPost)

router.get('/', PostController.getAllPosts)

router.get('/:id', PostController.getSinglePost)

router.put('/:id', PostController.updatePost)

router.delete('/:id', PostController.deletePost)
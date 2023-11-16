import { postServices } from '../Services/services'
import { Request, Response } from 'express'
import {PostSchemaValidate} from '../Models/models'

class postController {
    addPost = async (req: Request, res: Response) => {
        const data = {
            title : req.body.title,
            description : req.body.description,
            isPublished : req.body.isPublished,
            author : req.body.author
        }

        const {error, value} = PostSchemaValidate.validate(data)

        if(error){
            res.send(error.message)
        }else{
            const post = await postServices.createPost(value)
            res.status(201).send(post)
        }
    }

    getAllPosts = async (req: Request, res: Response) => {
        const allPosts = await postServices.getAllPosts()
        res.send(allPosts)
    }

    getSinglePost = async (req: Request, res: Response) => {
        const singlePost = await postServices.getSinglePost(req.params.id)
        res.send(singlePost)
    }

    updatePost = async (req: Request, res: Response) => {
        const post = await postServices.updatePost(req.params.id, req.body)
        res.send(post)
    }

    deletePost = async (req: Request, res: Response) => {
        await postServices.deletePost(req.params.id)
        res.send(`post with id of ${req.params.id} was deleted`)
    }
}

export const PostController = new postController()
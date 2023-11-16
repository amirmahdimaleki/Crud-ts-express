import { string } from 'joi'
import {Schema, model} from 'mongoose'
import Joi from 'joi'

// ^ joi
export const PostSchemaValidate = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    isPublished: Joi.boolean().required(),

})
// ^ interface for schema

interface PostInterface {
    title : string,
    description : string,
    author : string, 
    isPublished: boolean
}

// ^ schema 

const postSchema = new Schema<PostInterface>({
   title : {
    type : String
   },

   description : {
    type : String,
    required : true
   },

   author : {
    type : String,
    required : true
   },

   isPublished : {
    type : Boolean,
    required : true,
    default: false
   }

})

export const postModel = model<PostInterface>('postModel', postSchema)
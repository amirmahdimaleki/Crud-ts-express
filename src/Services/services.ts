import { postModel } from '../Models/models'

 class postService {

// * create post
async createPost(data: any){
    try {
        const newPost = await postModel.create(data)
        return newPost

    } catch (err) {
        console.log(err)
    }
}

// * get all posts
async getAllPosts(){
    try {
        const allPosts = postModel.find({})
        return allPosts

    } catch (err) {
        console.log(err)
    }
}

// * get a single post 
async getSinglePost(id: string){
    try {
        const singlePost = await postModel.findById({_id: id})

        if(!singlePost){
            throw new Error('Post with this id does not exist')
        } 
        return singlePost;

    } catch (err) {
        console.log(err)
    }
}

// * update a post 
async updatePost(id: string, data: any){
    try {
        const updatedPost = await postModel.findOneAndUpdate({_id: id}, data, {new: true})

        if(!updatedPost){
            throw new Error('Post with this id does not exist')
        }
        return updatedPost

    } catch (err) {
        console.log(err)
    }
}
// * delete a post 
async deletePost(id: string){
    try {
        const deletedPost = await postModel.findByIdAndDelete(id)

        if(!deletedPost){
            throw new Error('Post with this id does not exist')
        }
        
    } catch (err) {
        console.log(err)
    }
  }
}

export const postServices = new postService()
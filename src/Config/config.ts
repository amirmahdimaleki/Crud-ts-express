import dotenv from "dotenv"
import mongoose from 'mongoose'



const username = process.env.username
const password = process.env.password



dotenv.config()

// ^ mongo DB configuration
const mongoURI = `mongodb+srv://amir123:amirr123@cluster0.m621cln.mongodb.net/?retryWrites=true&w=majority`
const options = {
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4 
  };

// ^ db connection
export const db = mongoose.connect(mongoURI, options)
.then(res => {
    if(res){
        console.log(`Database connection successfully to the db`)
    }
    
}).catch(err => {
    console.log(err)
})

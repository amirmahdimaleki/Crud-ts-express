"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const username = process.env.username;
const password = process.env.password;
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${username}:${password}@cluster0.m621cln.mongodb.net/?retryWrites=true&w=majority`
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
dotenv_1.default.config();
// ^ mongo DB configuration
const mongoURI = `mongodb+srv://amir123:amirr123@cluster0.m621cln.mongodb.net/?retryWrites=true&w=majority`;
const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};
// ^ db connection
exports.db = mongoose_1.default.connect(mongoURI, options)
    .then(res => {
    if (res) {
        console.log(`Database connection successfully to the db`);
    }
}).catch(err => {
    console.log(err);
});

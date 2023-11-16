import express from 'express'
import { db } from  '../Config/config'
import { router } from '../Routes/routes'

const app = express()


// ^ middlewares

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// ^ routes

app.use('/api/v1/posts', router)

// ^ connect to db 

db.then(() => {
    app.listen(5000, () => console.log('server is running on port 5000 ... '))
})
.catch((err) => {
    console.log(err)
})
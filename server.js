import express from 'express'
import 'dotenv/config'
import ContactRouter from './routes/contactRoutes.js';
import { errorHandler } from './middleware/ErrorHandler.js';
import { connectDb } from './config/dbConnection.js';
import UsersRouter from './routes/userRoutes.js';
const app = express()
connectDb()
app.use(express.json())
const port = process.env.PORT||3000

app.use('/api/contacts',ContactRouter)
app.use('/api/users',UsersRouter)
app.use('*',(req, res,next) => {
    res.status(404)
    next(new Error(`'${req.originalUrl}' Not Found`))
    })
app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
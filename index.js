import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import dataBaseConnection from './db.js';

const app = express()
// env configuration
dotenv.config()

// database connection
dataBaseConnection()

// middlewares
app.use(cors())
app.use(express.json())

// Routers


app.listen(process.env.PORT,()=>console.log(`server started at ${process.env.PORT}`))
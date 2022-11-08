import 'dotenv/config'
import 'reflect-metadata'
import "./shared/container"
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors"
import { AppError } from './errors/AppError';
import { routes } from './routes';


const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes)

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}` 
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando...`)
    console.log(`Url: http://localhost:${PORT}`)
})
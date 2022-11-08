import { Request, response, Response } from "express";
import {container} from 'tsyringe'
import { CreateGeneroUseCase } from "./CreateGeneroUseCase";


class CreateGeneroController{
    async handle(req:Request,res:Response){
        const {nome} = req.body;
        const createGeneroUseCase = container.resolve(CreateGeneroUseCase);
        const genero = await createGeneroUseCase.execute(nome);
        return response.status(201).json(genero)
    }
}

export {CreateGeneroController}
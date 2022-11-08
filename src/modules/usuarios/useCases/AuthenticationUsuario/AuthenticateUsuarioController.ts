import { Request, Response } from "express";
import {container} from 'tsyringe'
import { AuthenticationUsuarioUseCase } from "./AuthenticationUsuarioUseCase";

class AuthenticationUsuarioController{
    async handle(req:Request,res:Response){
        const{email,senha} = req.body
        const authenticateUsuarioUseCase = container.resolve(AuthenticationUsuarioUseCase);
        const tokenResponse =  await authenticateUsuarioUseCase.execute(email,senha);
        return res.json(tokenResponse);
    }
}

export default new AuthenticationUsuarioController()
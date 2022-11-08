import { Request, Response } from "express";
import {container} from 'tsyringe'
import { UsuarioRepository } from "../../repositories/implementations/UsuariosRepository";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";



class CreateUsuarioController{
 async handle(req:Request, res:Response){
    const {email,data_nascimento,sexo,nome,senha} =  req.body
    const createUsuarioUseCase = container.resolve(CreateUsuarioUseCase)
    const user = await createUsuarioUseCase.execute({
        email,
        data_nascimento,
        sexo,
        nome,
        senha
    });

    return res.status(201).json({
        status: 201,
        mensagem: "Usuário criado",
        user
    })
 }
}

export default new CreateUsuarioController()
import { Request, Response } from "express";
import { prisma } from "../db/client";
import { AppError } from "../errors/AppError";

class UsuarioController{
    async store(req:Request,res:Response){
        const {email,data_nascimento,sexo,nome,senha,tipo_usuario} = req.body
        const usuarioAlreadyExist = await prisma.usuario.findUnique({
            where:{
                email
            }
        });
        if(usuarioAlreadyExist){
            throw new AppError("Usuário já existe")
        }
        const usuario = await prisma.usuario.create({
            data:{
                email,
                data_nascimento,
                sexo,
                nome,
                senha,
                tipo_usuario
            }
        });

        return res.status(201).json({
            mensagem: "Usuário criado com sucesso",
            usuario
        })
    }
}

export default new UsuarioController()
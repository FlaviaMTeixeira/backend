import { Usuario } from "@prisma/client"
import { ICreateUsuariosDTO } from "../dtos/ICreateUsuariosDTO"

interface IUsuarioRepository{
    create({email,data_nascimento,sexo,nome,senha}:ICreateUsuariosDTO): Promise<Usuario>
    findByEmail(email:string): Promise<Usuario>
} 

export {IUsuarioRepository}
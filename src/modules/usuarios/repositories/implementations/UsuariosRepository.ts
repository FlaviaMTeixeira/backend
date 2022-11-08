import { Usuario } from "@prisma/client";
import { prisma } from "../../../../db/client";
import { ICreateUsuariosDTO } from "../../dtos/ICreateUsuariosDTO";
import { IUsuarioRepository } from "../IUsuariosRepository";

class UsuarioRepository implements IUsuarioRepository{
    async create({ email, data_nascimento, sexo, nome, senha }: ICreateUsuariosDTO):Promise<Usuario>  {

        const usuario = await prisma.usuario.create({
            data:{
                email,
                data_nascimento,
                sexo,
                nome,
                senha,
                isAdmin:false
            }
        });
        return usuario
    }

    async findByEmail(email: string): Promise<Usuario> {
        const user = await prisma.usuario.findUnique({
            where:{
                email
            }
        })
        return user as Usuario
    }
}

export {UsuarioRepository}
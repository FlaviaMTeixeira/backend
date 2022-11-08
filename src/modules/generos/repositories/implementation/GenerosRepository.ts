import { Genero } from "@prisma/client";
import { prisma } from "../../../../db/client";
import { AppError } from "../../../../errors/AppError";
import { IGeneroRepository } from "../IGenerosRepository";

class GenerosRepository implements IGeneroRepository{
    async create( nome: string): Promise<Genero> {
        const genero = await prisma.genero.create({
            data:{
                nome
            }
        })

        return genero
    }

    async findByName(nome:string): Promise<Genero>{
        const genero = await prisma.genero.findFirst({
            where:{
                nome
            }
        })

        return genero as Genero
    }

}

export {GenerosRepository}
import { Genero } from "@prisma/client"

interface IGeneroRepository{
    create(nome:string): Promise<Genero>
    findByName(name: string): Promise<Genero>

} 

export {IGeneroRepository}
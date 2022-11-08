import { inject,injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IGeneroRepository } from "../../repositories/IGenerosRepository";

@injectable()
class CreateGeneroUseCase{
    constructor(
        @inject("GeneroRepository")
        private generoRepository: IGeneroRepository
    ){}
    async execute(nome:string){
        const genreAlreadyExist =  await this.generoRepository.findByName(nome)
        if(genreAlreadyExist){
            throw new AppError("Gênero já existe");
        }
        const genero = await this.generoRepository.create(nome)
        
        return genero
    }


}

export {CreateGeneroUseCase}
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateUsuariosDTO } from "../../dtos/ICreateUsuariosDTO";
import { IUsuarioRepository } from "../../repositories/IUsuariosRepository";

@injectable()
class CreateUsuarioUseCase{
    constructor(
        @inject("UsuarioRepository")
        private usuariosRepository:IUsuarioRepository
    ) {}
    async execute({email,data_nascimento,sexo,nome,senha}:ICreateUsuariosDTO){
        const usuarioAlreadyExist = await this.usuariosRepository.findByEmail(email);
        if (usuarioAlreadyExist){
            throw new AppError("Usuário já existe")
        }
        function dataValidate(data_nascimento:string){
            const dataFormatada = data_nascimento.replaceAll("/","-")
            const newData =  new Date(dataFormatada).toISOString()
            return newData
        }

        const senhaHash = await hash(senha,8);

        const user = await this.usuariosRepository.create({
            email,
            data_nascimento: dataValidate(data_nascimento),
            sexo,
            nome,
            senha:senhaHash
        })

        return user
    }
}

export {CreateUsuarioUseCase}
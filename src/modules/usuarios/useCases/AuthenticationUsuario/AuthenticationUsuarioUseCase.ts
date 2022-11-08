import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { injectable,inject } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsuarioRepository } from "../../repositories/IUsuariosRepository";

interface IResponse {
    user: {
        email: string;
        nome: string
    },
    token: string
}

@injectable()
class AuthenticationUsuarioUseCase {
    constructor(
        @inject("UsuarioRepository")
        private usuariosRepository: IUsuarioRepository
    ) { }

    async execute(email: string, senha: string) {
        const user = await this.usuariosRepository.findByEmail(email);
        if (!user) {
            throw new AppError("E-mail ou senha está incorreto!", 404);
        }

        const senhaMatch = await compare(senha, user.senha);
        if (!senhaMatch) {
            throw new AppError("E-mail ou senha está incorreto!", 404);
        }

        const token = sign({}, "e35e24d6b90162126f26666ca616f78b", {
            subject: user.id_usuario,
            expiresIn: "1d"
        });

        const tokenResponse: IResponse = {
            user: {
                nome: user.nome,
                email: user.email
            },
            token
        }
        return tokenResponse
    }
}

export {AuthenticationUsuarioUseCase}
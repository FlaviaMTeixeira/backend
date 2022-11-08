import { container } from "tsyringe";
import { IGeneroRepository } from "../../modules/generos/repositories/IGenerosRepository";
import { GenerosRepository } from "../../modules/generos/repositories/implementation/GenerosRepository";
import { UsuarioRepository } from "../../modules/usuarios/repositories/implementations/UsuariosRepository";
import { IUsuarioRepository } from "../../modules/usuarios/repositories/IUsuariosRepository";

container.registerSingleton<IUsuarioRepository>(
    "UsuarioRepository",
    UsuarioRepository
)

container.registerSingleton<IGeneroRepository>(
    "GeneroReposiory",
    GenerosRepository
)
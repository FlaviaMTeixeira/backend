import { container } from "tsyringe";
import { UsuarioRepository } from "../../modules/usuarios/repositories/implementations/UsuariosRepository";
import { IUsuarioRepository } from "../../modules/usuarios/repositories/IUsuariosRepository";

container.registerSingleton<IUsuarioRepository>(
    "UsuarioRepository",
    UsuarioRepository
)
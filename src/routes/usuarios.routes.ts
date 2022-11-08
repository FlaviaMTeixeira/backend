import { Router } from "express";
import CreateUsuarioController from "../modules/usuarios/useCases/CreateUsuario/CreateUsuarioController";
import AuthenticateUsuarioController from "../modules/usuarios/useCases/AuthenticationUsuario/AuthenticateUsuarioController";
const rotaUsuarios = Router()

rotaUsuarios.post("/",CreateUsuarioController.handle)
rotaUsuarios.post("/login",AuthenticateUsuarioController.handle)

export {rotaUsuarios}
import { rotaUsuarios } from "./usuarios.routes";
import { Router } from "express";

const routes = Router()

routes.use("/usuarios",rotaUsuarios)

export {routes};

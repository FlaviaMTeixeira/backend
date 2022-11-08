import { Request, Response, Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
const router = Router();

router.post('/usuarios',UsuarioController.store)

export  {router as rotaUsuario} ;
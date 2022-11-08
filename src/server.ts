import express from 'express';
import 'dotenv/config'
import { rotaUsuario } from './routes/index'
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use(rotaUsuario)

app.get("/", (req, res, next) => {
    res.status(200).json({
        mensagem: "Olá Mundo"
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando...`)
    console.log(`Url: http://localhost:${PORT}`)
})
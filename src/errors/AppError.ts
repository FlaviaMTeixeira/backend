export class AppError{
    public readonly mensagem:string;
    public readonly status:number;
    constructor(mensagem:string,status=400){
        this.mensagem = mensagem;
        this.status = status
    }
}
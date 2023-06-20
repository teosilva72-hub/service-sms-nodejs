import { Login } from "../model/interface/Login";
import { User } from "../model/interface/userInterface";

export default new class{
    
    async Retorno(data:any){
        return{
            code: data.code,
            status: data.status,
            message: data.message,
            data: data.data
        }
    }

    async verifyAccess(data:Login){
        if(data.email == undefined || data.email.trim() == '')
            throw 'email é obrigatório!';
        else if(data.password == undefined || data.password.trim() == '')
            throw 'senha é um campo obrigatório!';
        else{
            if(!await this.EmailValidator(data.email))
                throw 'email invalido!';
            else return true;
        }        
    }

    async EmailValidator(data:string){
        const result = /\S+@\S+\.\S+/;
        return await result.test(data);
    }

    async isExist(data:object){
        if(data === null) throw 'email ou senha invalido!';
        else return true;
    }

}
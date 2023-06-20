import {Request, Response} from 'express';
import LoginService from '../service/loginService';
import { Login } from '../model/interface/Login';

export default new class LoginController{
    async Login(req:Request, res:Response){
        const data:Login = req.body;
        const retorno = await LoginService.Login(data);
        return res.status(retorno?.code).json(retorno);
    }
}
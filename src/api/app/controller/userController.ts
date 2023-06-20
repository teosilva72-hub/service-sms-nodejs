import {Request, Response} from 'express';
import { User } from '../model/interface/userInterface';
import userService from '../service/userService';

export default new class UserController{

    async createUser(req:Request, res:Response){
        const data:User = req.body;
        const send = await userService.createUser(data);
        return res.status(send.code).json(send);
    }

    async getUserLogado(req:any, res:Response){
        const id:number = req.id;
        const send = await userService.getUserLogado(id);
        res.status(send.code).json(send);
    }

    async getUsersAll(req:Request, res:Response){
        const send = await userService.getAllUsers();
        return res.status(send.code).json(send);
    }
    
}

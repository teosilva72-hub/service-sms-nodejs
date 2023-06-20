import {Request, Response} from 'express'
import smsService from '../service/smsService';

export default new class SMSCONTROLLER{

    async sendMessageSimple(req:Request, res:Response){
        const retorno = await smsService.sendMessageSimple(req.body);
        res.status(retorno.code).json(retorno);
    }

    async sendMessageMultiple(req:Request, res:Response){
        const retorno = await smsService.sendMessageMultiple(req.body);
        res.status(retorno.code).json(retorno);
    }
}
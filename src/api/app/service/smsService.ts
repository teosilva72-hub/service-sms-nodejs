import toJson from '../../setting/return';
import axios from 'axios';
import 'dotenv/config';
import smsValidator from '../validator/smsValidator';

export default new class SMSSERVICE{

    async sendMessageSimple(data:any){
        try{
            const req:any = await smsValidator.sendSimple(data);
            return toJson.default(201, true, req.response, req);
        }catch(error){
            return toJson.default(400, false, `${error}`, null);
        }
    }

    async sendMessageMultiple(data: any){
        try{
            const req:any = await smsValidator.sendMultiple(data);
            return toJson.default(201, true, req.response, req);
        }catch(error){
            console.log(error)
            return toJson.default(400, false, `${error}`, null);
        }
    }
}
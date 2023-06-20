import { User } from "../model/interface/userInterface";
import json from '../../setting/return';
import userValidator from "../validator/userValidator";
import bcryptjs from 'bcryptjs';
import userRepository from "../repository/userRepository";
import moment from '../../setting/moment';

export default new class UserService {

    async createUser(data: User) {
        try {
            await userValidator.createUser(data);
            data.password = bcryptjs.hashSync(data.password, 8);
            data.deleted = false;
            if(data.photo == '' || data.photo == undefined) data.photo = process.env.REACT_APP_IMG_DEFAULT;
            const save = await userRepository.saveUser(data);
            return await json.default(201, true, 'criado com sucesso!', save);
        } catch (error) {
            return await json.default(401, false, `${error}`, null);
        }
    }

    async getAllUsers(){
        try{

            const res = await userRepository.getAllUsers();
            return json.default(200, true, 'usuário listado com sucesso!', res);

        }catch(error:any){
            return await json.default(400, false, `${error}`, null);
        }
    }

    async getUserLogado(id:number){
        try{
            const res = await userRepository.getUserById(id);
            return json.default(200, true, 'sucesso', res);
        }catch(error:any){
            return json.default(401, false, `${error}`, null);
        }
    }

}
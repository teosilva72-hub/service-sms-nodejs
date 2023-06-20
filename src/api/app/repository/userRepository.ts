import { Login } from '../model/interface/Login';
import { User } from '../model/interface/userInterface';
import UserModel from '../model/userModel';
import LoginLog from '../model/LoginLog';
import json from '../../setting/return';

export default new class {

    async authLogin(data: Login) {
        const db: any = UserModel.findOne({
            where: { email: data.email }
        });
        return db;
    }

    async loginLog(data: any) {
        delete data.email;
        delete data.password;
        console.log(data)
        try {
            await LoginLog.create(data);
        } catch (error) {
            return json.default(500, false, `${error}`, null);
        }
    }

    async getUser(data: User) {
        const db: any = UserModel.findOne({
            where: { email: data.email }
        });
        return db;
    }

    async saveUser(data: any) {
        const db: any = await UserModel.create(data);
        return db;
    }

    async getAllUsers() {
        const db: any = await UserModel.findAll();
        return db;
    }

    async getUserById(id: number) {
        try {
            const db: any = await UserModel.findOne({
                where: { id: id }
            });
            return db;
        } catch (error: any) {
            throw `erro ao consultar usuário por ID ::: ${error}`;
        }
    }
}
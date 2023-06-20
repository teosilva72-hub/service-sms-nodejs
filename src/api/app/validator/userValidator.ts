import { User } from "../model/interface/userInterface";
import userRepository from "../repository/userRepository";

export default new class UserValidator {

    async createUser(data: User) {
        if (data.name == undefined || data.name.trim() == '')
            throw 'nome é obrigatório!';
        else if (data.email == undefined || data.email.trim() == '')
            throw 'email é obrigatório!';
        else if (data.password == undefined || data.password.trim() == '')
            throw 'senha é obrigatório!';
        else
            await this.isExist(data);
    }

    async isExist(data: User) {
        const res = await userRepository.getUser(data);
        if (res == null) return true;
        throw 'usuário já cadastrado!';
    }
}
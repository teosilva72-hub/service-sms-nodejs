import bcrypt from 'bcryptjs';
import LoginValidator from '../validator/loginValidetor';
import UserRepository from '../repository/userRepository';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import json from '../../setting/return';
import { Login } from '../model/interface/Login';
import { User } from '../model/interface/userInterface';
import userRepository from '../repository/userRepository';
import dates from '../../setting/moment';

export default new class LoginService {
    async Login(data: Login) {
        try {
            await LoginValidator.verifyAccess(data);
            const user: User = await UserRepository.authLogin(data);
            await LoginValidator.isExist(user);

            if (!(await bcrypt.compare(data.password, user.password)))
                throw 'email ou senha invalido!';

            const token = jwt.sign({
                id: user.id, name: user.name, email: user.email
            },
                `${process.env.SECRET}`, {
                expiresIn: '4h'
            });
            data.date = await dates.DateNow(new Date, 'yyyy-MM-DD HH:mm:ss') 
            data.id_user = Number(user.id);
            await userRepository.loginLog(data);
            return await json.login(200, true, 'acesso autorizado', token);

        } catch (error) {
            return await json.default(401, false, `${error}`, null);
        }
    }
}
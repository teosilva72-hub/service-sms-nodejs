import {Router} from 'express';
import LoginController from '../app/controller/loginController';
const routes = Router();

routes.post('/api/auth/login', LoginController.Login);

export default routes;
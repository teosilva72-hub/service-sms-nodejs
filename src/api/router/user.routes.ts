import { Router} from "express";
import UserController from "../app/controller/userController";
import auth from '../../config/middleware/auth';
import userController from "../app/controller/userController";

const routes = Router();

routes.post('/api/user/register', UserController.createUser);
routes.get('/api/user/online',auth, UserController.getUserLogado);
routes.get('/api/user/all',auth, userController.getUsersAll);

export default routes;
import { Router } from "express";
import auth from './auth.routes';
import user from './user.routes';
import sms from './sms.routes';

const routes = Router();

routes.use(auth);
routes.use(user);
routes.use(sms);

export default routes;
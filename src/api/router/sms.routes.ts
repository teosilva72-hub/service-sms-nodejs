import {Router} from 'express';
import auth from '../../config/middleware/auth';
import smsController from '../../api/app/controller/smsController';

const routes = Router();
routes.post('/api/sms/send', smsController.sendMessageSimple);
routes.post('/api/sms/multiple', smsController.sendMessageMultiple);

export default routes;

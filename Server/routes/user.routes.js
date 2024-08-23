import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

const UserRouter = Router();

UserRouter.route('/register')
    .post(UserController.register);

UserRouter.route('/logout')
    .post(UserController.logout);

UserRouter.route('/login')
    .post(UserController.login);

UserRouter.route('/current_user')
    .get(UserController.getCurrentUser);

export default UserRouter;
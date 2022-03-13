
import { userController as controller } from '../controllers/userControllers';
import { handleUlpoad } from '../helpers/storageImage';
import { verifyToken } from '../middleware/verifyJwtToken';
import { checkDuplicateEmail } from '../middleware/verifySignUp';

// middleware for uploading image we put it befor request
const routeName = '/api/users/';

export function userRoute (app) {
    app.route(routeName)
        .get(controller.getList)
        .post(handleUlpoad('users'),[checkDuplicateEmail], controller.signup);
    // app.post('/api/users/',handleUlpoad('users'), [checkDuplicateEmail], controller.signup);
    app.route(routeName + 'login').post(controller.logIn);
    // app.get(routeName + ':id', controller.get);

    app.route(routeName + ':id')
        .get([verifyToken], controller.get)
        .put(handleUlpoad('users'), controller.put)
        .delete(controller.delete$);
};


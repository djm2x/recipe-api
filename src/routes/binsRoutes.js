import { binsController as controller } from '../controllers/binsController';


const routeName = '/api/bins/';

export const  binsRoutes = (app) => {

    app.route(routeName)
        .get(controller.getList)
        .post(controller.post);

    app.route(routeName + ':id')
        .get(controller.get)
        .put(controller.put)
        .delete(controller.delete$);
};

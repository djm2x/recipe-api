
import { categorieController as controller } from '../controllers/categorieController';

const routeName = '/api/categories/';

export const  routesCategorie = (app) => {

    app.route(routeName)
        .get(controller.getList)
        .post(controller.post);

    app.route(routeName + ':id')
        .get(controller.get)
        .put(controller.put)
        .delete(controller.delete$);
};

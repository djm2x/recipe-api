const routeName = '/api/recettes/';

import { recetteController as controller } from '../controllers/recetteControllers';
import { handleUlpoad } from '../helpers/storageImage';


export const routesRecette = (app) => {
    app.route(routeName)
        .post(handleUlpoad('recettes'), controller.post);

    app.route(routeName + ':startIndex/:pageSize')
        .get(controller.getList);

    app.route(routeName + ':id')
        .get(controller.get)
        .put(handleUlpoad('recettes'), controller.put)
        .delete(controller.delete$);

    app.route(routeName + 'byUser/:id/:startIndex/:pageSize')
        .get(controller.getListbyUser);
};

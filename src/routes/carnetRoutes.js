import { carnetController } from '../controllers/carnetControllers';

const routeName = '/api/carnets/';

export const carnetRoutes = (app) => {
    app.route(routeName)
        .post(carnetController.post);

    app.route(routeName + ':idUser/:idRecette')
        .get(carnetController.getState)
        .delete(carnetController.delete$);

    app.route(routeName + ':idUser/:startIndex/:pageSize')
        .get(carnetController.getList);
};

// import userRoute from './userRoutes';
// // importnst uteM = import './metierRoutes';
// import routesRecette from './recetteRoutes';
// import routesCatalogue from './categorieRoutes';
// import routesComment from './commentRoutes';
// import noteRecetteRoutes from './noteRecetteRoutes';
// import carnetRoutes from './carnetRoutes';
// import binsRoutes from './binsRoutes';

import { homeController } from "../controllers/homeController";
import { carnetRoutes } from "./carnetRoutes";
import { routesComment } from "./commentRoutes";
import { routesRecette } from "./recetteRoutes";
import { userRoute } from "./userRoutes";
import { binsRoutes } from "./binsRoutes";
import { routesCategorie } from "./categorieRoutes";
import { noteRecettesRoutes } from "./noteRecetteRoutes";

export async function route(app) {
  homeController(app);

  // const r = await fs.readdir(`${process.cwd()}/src/controllers`);

  // await Promise.all(
  //   r.map(async e => {
  //     const controllerName = e.replace('.js', '');
  //     const file = await import(`../controllers/${controllerName}`);

  //     file[controllerName](app);
  //   })
  // );

  userRoute(app);
  // routeM(app);
  routesRecette(app);
  routesCategorie(app);
  routesComment(app);
  noteRecettesRoutes(app);
  carnetRoutes(app);
  binsRoutes(app);
};


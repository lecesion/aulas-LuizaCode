import { Router } from "express";

import CadastroController from './controller/CadastroController'

const routes = Router();

routes.post('/cadastros', CadastroController.create);

export default routes;
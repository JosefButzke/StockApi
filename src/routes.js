import { Router } from 'express';

import MaterialController from './app/controllers/MaterialController';
import LotController from './app/controllers/LotController';
import MovementController from './app/controllers/MovementController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'API WORKING' });
});

routes.get('/materiais/:id', MaterialController.show); // http://localhost:3333/materiais/3
routes.get('/materiais', MaterialController.index); // http://localhost:3333/materiais
routes.post('/materiais', MaterialController.store);
routes.put('/materiais/:id', MaterialController.update);
routes.delete('/materiais/:id', MaterialController.destroy);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.destroy);

routes.get('/lots', LotController.index);
routes.post('/lots', LotController.store);
routes.put('/lots', LotController.update);
routes.delete('/lots', LotController.destroy);

routes.get('/movements', MovementController.index);
routes.post('/movements', MovementController.store);
routes.put('/movements', MovementController.update);
routes.delete('/movements', MovementController.destroy);

export default routes;

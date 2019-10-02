import { Router } from 'express';

import MaterialController from './app/controllers/MaterialController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'API WORKING' });
});

routes.get('/materiais', MaterialController.index);
routes.post('/materiais', MaterialController.store);
routes.put('/materiais', MaterialController.update);
routes.delete('/materiais', MaterialController.destroy);

export default routes;

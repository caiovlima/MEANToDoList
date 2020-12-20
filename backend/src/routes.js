const express = require('express');
const routes = express.Router();

const ItemController = require('./controllers/ItemController');

routes.get('/', ItemController.index);
routes.get('/item/:id', ItemController.show);
routes.post('/item/create', ItemController.store);
routes.put('/item/:id', ItemController.update);
routes.delete('/item/:id', ItemController.destroy);

module.exports = routes;
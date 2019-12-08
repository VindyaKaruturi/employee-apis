
import TestController from '../controllers/TestController';

import express = require("express");

class Router {
  public createRoutes(router: express.Router): void {
    router.get('/test', TestController.testRoutesCall);
  }
}

export default new Router();

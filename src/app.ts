import express = require("express");
import bodyParser = require("body-parser");
import AppConstants from './config/AppConstants';

const createMiddleware = require('swagger-express-middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');

const swaggerDefinition = {
  info: {
    title: AppConstants.SWAGGER_DEFINITION_TITLE,
    version: AppConstants.SWAGGER_DEFINITION_VERSION,
    description: AppConstants.SWAGGER_DEFINITION_DESCRIPTION,
  },
};

const options = {
  swaggerDefinition,
  apis: ['../**/*.yml'],
};
const swaggerSpec = swaggerJSDoc(options);

class App {
 public express: express.Application;

 public router: express.Router;

  constructor() { 
    this.express = express();
    this.middleware();
    this.router = express.Router();
    this.express.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    this.routes();
  }

  private middleware() {
    let app = this.express;
    let self = this;
    createMiddleware('api.yml',app,function(err:any, middleware:any) {
      app.use(middleware.files(
        {
          caseSensitive: false,
          strict: false
        },
        {
          apiPath: '/swagger/api',
          rawFilesPath: '/swagger/api'
        }
      ));
      app.use(bodyParser.json());
      app.use(middleware.metadata());
      app.use(middleware.parseRequest());
      app.use(middleware.validateRequest());
      app.use(cors());
      app.use(bodyParser.urlencoded({ extended: false })); 
      app.use((req,res,next) => {
        console.log('Im in middleware');
        next();
      })
    })
  }

  private routes() {
    this.express.use('/', this.router);
  }



}

export default new App();

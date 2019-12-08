"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const AppConstants_1 = __importDefault(require("./config/AppConstants"));
const createMiddleware = require('swagger-express-middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');
const swaggerDefinition = {
    info: {
        title: AppConstants_1.default.SWAGGER_DEFINITION_TITLE,
        version: AppConstants_1.default.SWAGGER_DEFINITION_VERSION,
        description: AppConstants_1.default.SWAGGER_DEFINITION_DESCRIPTION,
    },
};
const options = {
    swaggerDefinition,
    apis: ['../**/*.yml'],
};
const swaggerSpec = swaggerJSDoc(options);
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.router = express.Router();
        this.express.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        this.routes();
    }
    middleware() {
        let app = this.express;
        let self = this;
        createMiddleware('api.yml', app, function (err, middleware) {
            app.use(middleware.files({
                caseSensitive: false,
                strict: false
            }, {
                apiPath: '/swagger/api',
                rawFilesPath: '/swagger/api'
            }));
            app.use(bodyParser.json());
            app.use(middleware.metadata());
            app.use(middleware.parseRequest());
            app.use(middleware.validateRequest());
            app.use(cors());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use((req, res, next) => {
                console.log('Im in middleware');
                next();
            });
        });
    }
    routes() {
        this.express.use('/', this.router);
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map
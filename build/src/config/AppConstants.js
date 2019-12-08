"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dev_1 = __importDefault(require("../env/dev"));
class AppConstants {
}
exports.default = AppConstants;
AppConstants.PORT = "8000";
AppConstants.DB_NAME = process.env.DB_NAME || dev_1.default.DB_NAME;
AppConstants.DB_USERNAME = process.env.DB_USERNAME || dev_1.default.DB_USERNAME;
AppConstants.DB_PASSWORD = process.env.DB_PASSWORD || dev_1.default.DB_PASSWORD;
AppConstants.DB_HOSTNAME = process.env.DB_HOSTNAME || dev_1.default.DB_HOSTNAME;
AppConstants.DB_PORT = process.env.DB_PORT || dev_1.default.DB_PORT;
AppConstants.SWAGGER_DEFINITION_TITLE = 'REST API for my App';
AppConstants.SWAGGER_DEFINITION_VERSION = '1.0.0';
AppConstants.SWAGGER_DEFINITION_DESCRIPTION = 'This is the REST API for my product';
//# sourceMappingURL=AppConstants.js.map
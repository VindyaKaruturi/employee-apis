"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TestController_1 = __importDefault(require("../controllers/TestController"));
class Router {
    createRoutes(router) {
        router.get('/test', TestController_1.default.testRoutesCall);
    }
}
exports.default = new Router();
//# sourceMappingURL=router.js.map
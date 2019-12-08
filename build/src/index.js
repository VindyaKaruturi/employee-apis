"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const AppConstants_1 = __importDefault(require("./config/AppConstants"));
/**
 * Starting the application on port configured
 */
app_1.default.express.listen(AppConstants_1.default.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Promise.resolve().then(() => __importStar(require("./routes/router"))).then(i => i.default.createRoutes(app_1.default.router));
        console.log(`App listening on port ${AppConstants_1.default.PORT}`);
    }
    catch (err) {
        console.log(err);
    }
}));
module.exports = app_1.default;
//# sourceMappingURL=index.js.map
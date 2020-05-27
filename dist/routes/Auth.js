"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController = __importStar(require("../middlewere/Auth"));
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const is_auth_1 = __importDefault(require("../middle/is-auth"));
const router = express_promise_router_1.default();
router.post('/login', AuthController.Login);
router.patch('/status', AuthController.updateUserStatus);
router.put('/signup', AuthController.signUp);
router.delete('/user', AuthController.deleteUser);
router.patch('/user', is_auth_1.default, AuthController.restrictTo('admin'), AuthController.UpdateUser);
exports.default = router;
//# sourceMappingURL=Auth.js.map
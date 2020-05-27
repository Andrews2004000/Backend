"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const Auth_1 = __importDefault(require("./routes/Auth"));
const Products_1 = __importDefault(require("./routes/Products"));
const app = express_1.default();
const CLIENT_URL = 'http://localhost:8080';
app.use(body_parser_1.default.json());
app.use(cors_1.default({ credentials: true, origin: CLIENT_URL }));
app.use('/user', Auth_1.default);
app.use('/products', Products_1.default);
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route Not Foundsss' });
});
app.use((err, req, res, next) => {
    const status = err.StatusCode || 500;
    const data = err.data;
    const message = err.message;
    console.log(err);
    res.status(status).json({ message: message, data: data });
});
mongoose_1.default.connect('mongodb+srv://Andrew:Dalida@cluster0-rsstj.mongodb.net/user?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(res => {
    app.listen(5000);
});
//# sourceMappingURL=app.js.map
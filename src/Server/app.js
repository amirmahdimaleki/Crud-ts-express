"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("../Config/config");
const routes_1 = require("../Routes/routes");
const app = (0, express_1.default)();
// ^ middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// ^ routes
app.use('/api/v1/posts', routes_1.router);
// ^ connect to db 
config_1.db.then(() => {
    app.listen(5000, () => console.log('server is running on port 5000 ... '));
})
    .catch((err) => {
    console.log(err);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//IMPORTS
const express_1 = __importDefault(require("express"));
const progress_1 = __importDefault(require("./routes/progress"));
//APP SETUP
const app = (0, express_1.default)();
app.use(express_1.default.json());
require('dotenv').config();
const PORT = process.env.PORT || 5000;
//Routes
app.use('/progress', progress_1.default);
//LISTNER
app.listen(PORT, () => console.log(`\t\t------ API RUNNING ON http://localhost:${PORT} ------`));

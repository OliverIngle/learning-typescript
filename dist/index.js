"use strict";
const express = require('express');
const app = express();
require('dotenv').config();
app.listen(process.env.PORT || 8080, () => console.log(`\t\t------ API RUNNING ON PORT ${process.env.PORT} ------`));

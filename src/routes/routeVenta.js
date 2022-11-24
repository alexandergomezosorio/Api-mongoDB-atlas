const cors = require('cors')
const express = require('express');

const controllerVenta = require("../models/venta");

const routerVenta = express.Router();

routerVenta.get("/ventas", cors(), controllerVenta);

module.exports = express.Router();

'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildPath = function buildPath() {
    return process.env.NODE_ENV !== 'production' ? _path2.default.join(__dirname, '../build') : _path2.default.join(__dirname, 'build');
};

var app = (0, _express2.default)();
app.use(_express2.default.static(buildPath()));
app.use('/cheeses', _routes.cheeseRoutes);

app.listen(3001, function () {
    return console.log('Server on 3001');
});
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cheeseRoutes = undefined;

var _express = require("express");

var CHEESES = ["Bath Blue", "Barkham Blue", "Buxton Blue", "Cheshire Blue", "Devon Blue", "Dorset Blue Vinney", "Dovedale", "Exmoor Blue", "Harbourne Blue", "Lanark Blue", "Lymeswold", "Oxford Blue", "Shropshire Blue", "Stichelton", "Stilton", "Blue Wensleydale", "Yorkshire Blue"];

var cheeseRoutes = (0, _express.Router)();

cheeseRoutes.get('/', function (req, res) {
    res.json(CHEESES);
});

exports.cheeseRoutes = cheeseRoutes;

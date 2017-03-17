'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Cheese = require('./models/Cheese');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var CHEESES = ["Bath Blue", "Barkham Blue", "Buxton Blue", "Cheshire Blue", "Devon Blue", "Dorset Blue Vinney", "Dovedale", "Exmoor Blue", "Harbourne Blue", "Lanark Blue", "Lymeswold", "Oxford Blue", "Shropshire Blue", "Stichelton", "Stilton", "Blue Wensleydale", "Yorkshire Blue"];

app.get('/cheeses', function (req, res) {
    res.json(CHEESES);
});

app.listen(3001, function () {
    return console.log('Server on 3001');
});
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cheese = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheeseSchema = _mongoose2.default.Schema({
    name: String
});

var Cheese = _mongoose2.default.model('cheese', CheeseSchema);

exports.Cheese = Cheese;

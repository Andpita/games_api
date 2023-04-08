"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable func-names */

//Segurança
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

//BD
require('./database');

//Express
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

//Cors
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

//Segurança
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

//Resposta
var _expressdelay = require('express-delay'); var _expressdelay2 = _interopRequireDefault(_expressdelay);

//Rotas
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
//import token from './routes/token';
var _score = require('./routes/score'); var _score2 = _interopRequireDefault(_score);

//WhiteList Cors
const whiteList = [
  "https://api.andpita.net",
  "http://localhost:3001",
  "http://localhost:3000",
  "https://game.andpita.net",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

//APP
class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_expressdelay2.default.call(void 0, 500));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _home2.default);
    //    this.app.use('/token/', token);
    this.app.use('/score/', _score2.default);
  }
}

exports. default = new App().app;

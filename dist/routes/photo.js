"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _Photo = require('../controllers/Photo'); var _Photo2 = _interopRequireDefault(_Photo);
// import loginRequired from '../middlewares/loginRequired';

const router = new (0, _express.Router)();

router.post('/', _Photo2.default.store);

exports. default = router;

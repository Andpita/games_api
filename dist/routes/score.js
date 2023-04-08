"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Score = require('../controllers/Score'); var _Score2 = _interopRequireDefault(_Score);

const router = new (0, _express.Router)();

router.get('/', _Score2.default.index); //all score
router.post('/', _Score2.default.store); //novo score
router.get('/', _Score2.default.newTest); //teste

exports. default = router;

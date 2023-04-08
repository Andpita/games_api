"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Gamer = require('../models/Gamer'); var _Gamer2 = _interopRequireDefault(_Gamer);

class Score {
  async newTest(req, res) {
    const newScore = await _Gamer2.default.create({
      nome: 'Testinho',
      points: 100,
      email: 'teste@teste.com',
      game: 'cachorrinho',
    });
    res.json(newScore);
  }

  async index(req, res) {
    const scores = await _Gamer2.default.findAll({
      attributes: ['id', 'nome', 'points', 'email', 'game'],
      order: [['id', 'DESC'], ['id', 'DESC']],
    });
    res.json(scores);
  }

  async store(req, res) {
    try {
      const newScore = await _Gamer2.default.create(req.body);

      return res.json(newScore);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new Score();

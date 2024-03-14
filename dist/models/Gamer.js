"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Gamer extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 20],
            msg: 'Nome precisa ter entre 4 e 20 caracteres.',
          },
        },
      },
      points: {
        type: _sequelize2.default.FLOAT,
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },
      game: {
        type: _sequelize2.default.STRING,
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Gamer;

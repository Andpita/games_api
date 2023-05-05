import Sequelize, { Model } from 'sequelize';

export default class Gamer extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 20],
            msg: 'Nome precisa ter entre 4 e 20 caracteres.',
          },
        },
      },
      points: {
        type: Sequelize.FLOAT,
      },
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
      },
    }, {
      sequelize,
    });
    return this;
  }
}

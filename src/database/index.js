import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Gamer from '../models/Gamer';

const models = [Gamer];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

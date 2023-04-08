/* eslint-disable func-names */

//Segurança
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

//BD
import './database';

//Express
import express from 'express';

//Cors
import cors from 'cors';

//Segurança
import helmet from 'helmet';

//Resposta
import delay from 'express-delay';

//Rotas
import home from './routes/home';
//import token from './routes/token';
import score from './routes/score';

//WhiteList Cors
const whiteList = [
  "https://api.andpita.net",
  "https://localhost:3001",
  "https://localhost:3000",
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
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(delay(500));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', home);
    //    this.app.use('/token/', token);
    this.app.use('/score/', score);
  }
}

export default new App().app;

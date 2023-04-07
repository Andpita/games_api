import Gamer from '../models/Gamer';

class Score {
  async index(req, res) {
    const newScore = await Gamer.create({
      nome: 'Testinho',
      points: 100,
      email: 'teste@teste.com',
      game: 'cachorrinho',
    });
    res.json(newScore);
  }
}

export default new Score();

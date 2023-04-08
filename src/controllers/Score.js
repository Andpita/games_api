import Gamer from '../models/Gamer';

class Score {
  async newTest(req, res) {
    const newScore = await Gamer.create({
      nome: 'Testinho',
      points: 100,
      email: 'teste@teste.com',
      game: 'cachorrinho',
    });
    res.json(newScore);
  }

  async index(req, res) {
    const scores = await Gamer.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], ['id', 'DESC']],
    });
    res.json(scores);
  }

  async store(req, res) {
    try {
      const newScore = await Gamer.create(req.body);

      return res.json(newScore);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new Score();

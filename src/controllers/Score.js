import Gamer from '../models/Gamer';

class Score {
  async index(req, res) {
    const scores = await Gamer.findAll({
      attributes: ['id', 'nome', 'points', 'email', 'game'],
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

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não encontrado'],
        });
      }

      const ponto = await Gamer.findByPk(id, {
        attributes: ['id', 'nome', 'points', 'email', 'game'],
        order: [['id', 'DESC'], ['id', 'DESC']],
      });

      if (!ponto) {
        return res.status(400).json({
          errors: ['ponto não encontrado'],
        });
      }

      return res.json(ponto);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new Score();

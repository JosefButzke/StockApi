import Material from '../models/Material';

class MaterialController {
  async show(req, res) {
    const { id } = req.params;
    const response = await Material.findOne({ where: { MATE_ID: id } });
    return res.json(response);
  }

  async index(req, res) {
    const response = await Material.findAll();
    return res.json(response);
  }

  async store(req, res) {
    const response = await Material.create(req.body);
    return res.json(response);
  }

  async update(req, res) {
    const { id } = req.params; //  const { id } = req.params; === cons id = req.params.id
    const materialExists = await Material.findByPk(id);

    if (!materialExists) {
      res.status(400).json('Material não existe');
    }

    const response = await materialExists.update(req.body);

    return res.json(response);
  }

  async destroy(req, res) {
    const { id } = req.params; //  const { id } = req.params; === cons id = req.params.id

    const materialExists = await Material.findByPk(id);

    if (!materialExists) {
      res.status(400).json('Material não existe');
    }

    const response = await materialExists.destroy();

    return res.json(response);
  }
}

export default new MaterialController();

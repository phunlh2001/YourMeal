import dishServices from "../services/dishes.service.js";

class DishController {
  async getDishes(req, res) {
    try {
      const data = await dishServices.getAll();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getDishById(req, res) {
    try {
      const { id } = req.params;
      const data = await dishServices.getById(id);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getDishByName(req, res) {
    try {
      const { name } = req.params;
      const data = await dishServices.getOneByName(name);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getAllByName(req, res) {
    try {
      const { name } = req.params;
      const data = await dishServices.getAllByName(name);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

export default DishController;

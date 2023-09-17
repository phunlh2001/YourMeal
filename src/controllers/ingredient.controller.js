import ingredientServices from "../services/ingredient.service.js";

class IngredientController {
  async getIngredients(req, res) {
    try {
      const data = await ingredientServices.getAll();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getIngredientById(req, res) {
    try {
      const { id } = req.params;
      const data = await ingredientServices.getById(id);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getIngredientsByName(req, res) {
    try {
      const { name } = req.params;
      const data = await ingredientServices.getAllByName(name);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

export default IngredientController;

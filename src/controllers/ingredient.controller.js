import ingredientServices from "../services/ingredient.service.js";

class IngredientController {
  async getIngredients(req, res) {
    try {
      const ingredients = await ingredientServices.getAll();

      const transData = ingredients.map((ingredient) => ({
        id: ingredient._id,
        name: ingredient.name,
        calories: ingredient.cal,
        image: ingredient.link_img,
      }));

      return res.status(200).json({ data: transData });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getIngredientById(req, res) {
    try {
      const { id } = req.body;
      const ingredient = await ingredientServices.getById(id);
      return res.status(200).json({ data: ingredient });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getIngredientsByName(req, res) {
    try {
      const { name } = req.body;
      const ingredients = await ingredientServices.getAllByName(name);
      const data = ingredients.map((ingredient) => ({
        id: ingredient._id,
        name: ingredient.name,
        calories: ingredient.cal,
        image: ingredient.link_img,
      }));

      return res.status(200).json({ data: data });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

export default IngredientController;

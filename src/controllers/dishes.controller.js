import dishServices from "../services/dishes.service.js";

class DishController {
  async getDishes(req, res) {
    try {
      const dishes = await dishServices.getAll();

      const transDishes = dishes.map((dish) => ({
        id: dish._id,
        name: dish.name,
        calories: dish.cal,
        ingredients: dish.ingredients,
        recipe: dish.cook,
        image: dish.link_img,
      }));

      return res.status(200).json({ data: transDishes });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getDishById(req, res) {
    try {
      const { id } = req.body;
      const dish = await dishServices.getById(id);
      const data = {
        id: dish._id,
        name: dish.name,
        calories: dish.cal,
        ingredients: dish.ingredients,
        recipe: dish.cook,
        image: dish.link_img,
      };
      return res.status(200).json({ data: data });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getDishByName(req, res) {
    try {
      const { name } = req.body;
      const dish = await dishServices.getOneByName(name);
      const data = {
        id: dish._id,
        name: dish.name,
        calories: dish.cal,
        ingredients: dish.ingredients,
        recipe: dish.cook,
        image: dish.link_img,
      };
      return res.status(200).json({ data: data });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async getAllByName(req, res) {
    try {
      const { name } = req.body;
      const dishes = await dishServices.getAllByName(name);
      const data = dishes.map((dish) => ({
        id: dish._id,
        name: dish.name,
        calories: dish.cal,
        ingredients: dish.ingredients,
        recipe: dish.cook,
        image: dish.link_img,
      }));

      return res.status(200).json({ data: data });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

export default DishController;

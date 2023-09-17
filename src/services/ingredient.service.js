import IngredientModel from "../models/ingredient.model.js";

async function getAll() {
  const ingredients = await IngredientModel.find({});
  if (!ingredients || ingredients.length === 0) throw "Ingredients empty!";

  const transData = ingredients.map((ingredient) => ({
    id: ingredient.id,
    name: ingredient.name,
    calories: ingredient.cal,
    image: ingredient.link_img,
  }));

  return transData;
}

async function getById(id) {
  const found = await IngredientModel.findById(id).exact();
  if (!found) throw "Not found ingredient";

  const ingredient = {
    id: found.id,
    name: found.name,
    calories: found.cal,
    image: found.link_img,
  };
  return ingredient;
}

async function getAllByName(name) {
  const found = await IngredientModel.find({ name }).exact();
  if (!found) throw "Not found ingredient";

  const ingredients = found.map((ingredient) => ({
    id: ingredient.id,
    name: ingredient.name,
    calories: ingredient.cal,
    image: ingredient.link_img,
  }));
  return ingredients;
}

const ingredientServices = {
  getAll,
  getById,
  getAllByName,
};

export default ingredientServices;

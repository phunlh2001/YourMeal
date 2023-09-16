import IngredientModel from "../models/ingredient.model.js";

async function getAll() {
  const ingredients = await IngredientModel.find({});
  if (!ingredients || ingredients.length === 0) throw "Ingredients empty!";
  return ingredients;
}

async function getById(id) {
  const ingredient = await IngredientModel.findById(id).exact();
  if (ingredient === null) throw "Not found ingredient";
  return ingredient;
}

async function getAllByName(name) {
  const ingredient = await IngredientModel.find({ name: name }).exact();
  if (ingredient === null) throw "Not found ingredient";
  return ingredient;
}

const ingredientServices = {
  getAll,
  getById,
  getAllByName,
};

export default ingredientServices;

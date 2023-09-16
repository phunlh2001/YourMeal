import DishModel from "../models/dishes.model.js";

async function getAll() {
  const dishes = await DishModel.find({});
  if (!dishes || dishes.length === 0) throw "Dishes empty";

  const transDishes = dishes.map((dish) => ({
    id: dish._id,
    name: dish.name,
    calories: dish.cal,
    ingredients: dish.ingredients,
    recipe: dish.cook,
    image: dish.link_img,
  }));
  return transDishes;
}

async function getById(id) {
  const found = await DishModel.findById(id).exact();
  if (!found) throw "Not found dish";

  const dish = {
    id: found._id,
    name: found.name,
    calories: found.cal,
    ingredients: found.ingredients,
    recipe: found.cook,
    image: found.link_img,
  };
  return dish;
}

async function getOneByName(name) {
  const found = await DishModel.findOne({ name: name }).exact();
  if (!found) throw "Not found dish";

  const dish = {
    id: found._id,
    name: found.name,
    calories: found.cal,
    ingredients: found.ingredients,
    recipe: found.cook,
    image: found.link_img,
  };
  return dish;
}

async function getAllByName(name) {
  const found = await DishModel.find({ name: name }).exact();
  if (!found) throw "Not found dish";

  const dishes = found.map((dish) => ({
    id: dish._id,
    name: dish.name,
    calories: dish.cal,
    ingredients: dish.ingredients,
    recipe: dish.cook,
    image: dish.link_img,
  }));
  return dishes;
}

const dishServices = {
  getAll,
  getById,
  getOneByName,
  getAllByName,
};

export default dishServices;

import DishModel from "../models/dishes.model.js";

async function getAll() {
  const dishes = await DishModel.find({});
  if (!dishes || dishes.length === 0) throw new Error("Dishes empty");

  const transDishes = dishes.map((dish) => ({
    id: dish._id,
    name: dish.name,
    calories: dish.cal,
    ingredients: dish.ingredients,
    prepare_steps: dish.prepare_steps,
    cook_steps: dish.cook_steps,
    link_img: dish.link_img,
  }));
  return transDishes;
}

async function getById(id) {
  const found = await DishModel.findById(id);
  if (!found) throw new Error("Dish not found");

  const dish = {
    id: found._id,
    name: found.name,
    calories: found.cal,
    ingredients: found.ingredients,
    prepare_steps: found.prepare_steps,
    cook_steps: found.cook_steps,
    link_img: found.link_img,
  };
  return dish;
}

async function getOneByName(name) {
  const found = await DishModel.findOne({ name });
  if (!found || found.length === 0) throw new Error("Dish not found");

  const dish = {
    id: found._id,
    name: found.name,
    calories: found.cal,
    ingredients: found.ingredients,
    prepare_steps: found.prepare_steps,
    cook_steps: found.cook_steps,
    link_img: found.link_img,
  };
  return dish;
}

async function getAllByName(name) {
  const found = await DishModel.find({ name });
  if (!found) throw new Error("Dish not found");

  const dishes = found.map((dish) => ({
    id: dish._id,
    name: dish.name,
    calories: dish.cal,
    ingredients: dish.ingredients,
    prepare_steps: dish.prepare_steps,
    cook_steps: dish.cook_steps,
    link_img: dish.link_img,
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

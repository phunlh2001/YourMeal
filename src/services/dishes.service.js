import DishModel from "../models/dishes.model.js";

async function getAll() {
  const dishes = await DishModel.find({});
  if (!dishes || dishes.length === 0) throw "Dishes empty";
  return dishes;
}

async function getById(id) {
  const dish = await DishModel.findById(id).exact();
  if (dish === null) throw "Not found dish";
  return dish;
}

async function getOneByName(name) {
  const dish = await DishModel.findOne({ name: name }).exact();
  if (dish === null) throw "Not found dish";
  return dish;
}

async function getAllByName(name) {
  const dish = await DishModel.find({ name: name }).exact();
  if (dish === null) throw "Not found dish";
  return dish;
}

const dishServices = {
  getAll,
  getById,
  getOneByName,
  getAllByName,
};

export default dishServices;

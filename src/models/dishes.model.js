import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  cal: { type: Number, required: true },
  ingredients: { type: Array, required: true },
  prepare_steps: { type: Array, required: true },
  cook_steps: { type: Array, required: true },
  link_img: { type: String, required: true },
});

const DishModel = mongoose.model("Dishes", schema);

export default DishModel;

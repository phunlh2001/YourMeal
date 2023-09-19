import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema({
  id: { type: Number },
  name: { type: String, required: true },
  cal: { type: Number, required: true },
  link_img: { type: String, required: true },
});

const IngredientModel = mongoose.model("Ingredients", schema);

export default IngredientModel;

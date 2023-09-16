import mongoose from "mongoose";
const { Schema } = mongoose;

const IngredientModel = new Schema({
  id: { type: Number },
  name: { type: String, default: "" },
  cal: { type: Number, default: 0 },
  link_img: { type: String, default: "" },
});

export default mongoose.model("Ingredients", IngredientModel);

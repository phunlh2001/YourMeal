import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema({
  id: { type: Number },
  name: { type: String, default: "" },
  cal: { type: Number, default: 0 },
  link_img: { type: String, default: "" },
});

const IngredientModel = mongoose.model("Ingredients", schema);

export default IngredientModel;

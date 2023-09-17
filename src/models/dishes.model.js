import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, default: "" },
  cal: { type: Number, default: 0 },
  ingredients: { type: Array, default: [] },
  cook: { type: String, default: "" },
  link_img: { type: String, default: "" },
});

const DishModel = mongoose.model("Dishes", schema);

export default DishModel;

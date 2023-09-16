import mongoose from "mongoose";

const uri = "mongodb://mongodb/YourMeal";

export const dbConnector = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect db successfully!");
  } catch (error) {
    console.log("Connect db failed:", error);
  }
};

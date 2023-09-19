import { Router } from "express";
import IngredientController from "../controllers/ingredient.controller.js";

const ingredientRouter = Router();
const ingredient = new IngredientController();

ingredientRouter.get("/", ingredient.getIngredients);
ingredientRouter.get("/id/:id", ingredient.getIngredientById);
ingredientRouter.get("/name/:name", ingredient.getIngredientsByName);

export default ingredientRouter;

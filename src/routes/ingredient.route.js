import { Router } from "express";
import IngredientController from "../controllers/ingredient.controller.js";

const router = Router();
const ingredient = new IngredientController();

router.get("/", ingredient.getIngredients);
router.get("/:id", ingredient.getIngredientById);
router.get("/:name", ingredient.getIngredientsByName);

export { router };

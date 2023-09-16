import { Router } from "express";
import DishController from "../controllers/dishes.controller.js";

const router = Router();
const dish = new DishController();

router.get("/", dish.getDishes);
router.get("/:id", dish.getDishById);
router.get("/:name", dish.getAllByName);
router.get("/getOne/:name", dish.getDishByName);

export { router };

import { Router } from "express";
import DishController from "../controllers/dishes.controller.js";

const dishRouter = Router();
const dish = new DishController();

dishRouter.get("/", dish.getDishes);
dishRouter.get("/id/:id", dish.getDishById);
dishRouter.get("/name/:name", dish.getAllByName);
dishRouter.get("/one/:name", dish.getDishByName);

export default dishRouter;

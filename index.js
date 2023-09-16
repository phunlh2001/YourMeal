import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dbConnector } from "./src/database/connector.js";
import * as ingredientRouter from "./src/routes/ingredient.route.js";
import * as dishRouter from "./src/routes/dish.route.js";

dbConnector();
const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

// routers
app.use("/api/dishes", dishRouter);
app.use("/api/ingredients", ingredientRouter);

app.use(morgan("combined"));

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);

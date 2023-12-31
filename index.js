import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dbConnector } from "./src/database/connector.js";
import ingredientRouter from "./src/routes/ingredient.route.js";
import dishRouter from "./src/routes/dish.route.js";
import errorHandler from "./src/middlewares/handle-error.js";

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

// middleware error handler
app.use((err, req, res, next) => {
  errorHandler(err, req, res, next)
})

// routers
app.use("/api/dishes", dishRouter);
app.use("/api/ingredients", ingredientRouter);

app.use(morgan("combined"));

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);

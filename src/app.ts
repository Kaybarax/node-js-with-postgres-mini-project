import "reflect-metadata";
import express from "express";
import { PostgresDataSource } from "./app-data-source";
import { userRouter } from "./apis/user.api";
import { energyConsumptionRouter } from "./apis/energy.api";

// establish database connection
PostgresDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// create and setup express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(energyConsumptionRouter);

export { app };

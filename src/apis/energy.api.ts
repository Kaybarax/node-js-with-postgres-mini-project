import express, { Request, Response } from "express";
import { PostgresDataSource } from "../app-data-source";
import { EnergyConsumption } from "../entities/Energy_Consumption";

const energyConsumptionRouter = express.Router();

// register energy consumption routes
energyConsumptionRouter.get(
  "/usersEnergyConsumption",
  async function (req: Request, res: Response) {
    const usersEnergyConsumption = await PostgresDataSource.getRepository(
      EnergyConsumption
    ).find();
    res.json(usersEnergyConsumption);
  }
);

energyConsumptionRouter.get(
  "/usersEnergyConsumption/:id",
  async function (req: Request, res: Response) {
    const results = await PostgresDataSource.getRepository(
      EnergyConsumption
    ).findOneBy({
      id: req.params.id,
    });
    return res.send(results);
  }
);

energyConsumptionRouter.post(
  "/usersEnergyConsumption",
  async function (req: Request, res: Response) {
    const user = PostgresDataSource.getRepository(EnergyConsumption).create(
      req.body
    );
    const results = await PostgresDataSource.getRepository(
      EnergyConsumption
    ).save(user);
    return res.send(results);
  }
);

energyConsumptionRouter.put(
  "/usersEnergyConsumption/:id",
  async function (req: Request, res: Response) {
    const energyConsumption = await PostgresDataSource.getRepository(
      EnergyConsumption
    ).findOneBy({
      id: req.params.id,
    });
    let results = {};
    if (energyConsumption) {
      PostgresDataSource.getRepository(EnergyConsumption).merge(
        energyConsumption,
        req.body
      );
      results = await PostgresDataSource.getRepository(EnergyConsumption).save(
        energyConsumption
      );
    }
    return res.send(results);
  }
);

energyConsumptionRouter.delete(
  "/usersEnergyConsumption/:id",
  async function (req: Request, res: Response) {
    const results = await PostgresDataSource.getRepository(
      EnergyConsumption
    ).delete(req.params.id);
    return res.send(results);
  }
);

export { energyConsumptionRouter };

import express, { Request, Response } from "express";
import { PostgresDataSource } from "../app-data-source";
import { User } from "../entities/User";

const userRouter = express.Router();

// register user routes
userRouter.get("/users", async function (req: Request, res: Response) {
  const users = await PostgresDataSource.getRepository(User).find();
  res.json(users);
});

userRouter.get("/users/:id", async function (req: Request, res: Response) {
  const results = await PostgresDataSource.getRepository(User).findOneBy({
    id: req.params.id,
  });
  return res.send(results);
});

userRouter.post("/users", async function (req: Request, res: Response) {
  const user = PostgresDataSource.getRepository(User).create(req.body);
  const results = await PostgresDataSource.getRepository(User).save(user);
  return res.send(results);
});

userRouter.put("/users/:id", async function (req: Request, res: Response) {
  const user = await PostgresDataSource.getRepository(User).findOneBy({
    id: req.params.id,
  });
  let results = {};
  if (user) {
    PostgresDataSource.getRepository(User).merge(user, req.body);
    results = await PostgresDataSource.getRepository(User).save(user);
  }
  return res.send(results);
});

userRouter.delete("/users/:id", async function (req: Request, res: Response) {
  const results = await PostgresDataSource.getRepository(User).delete(
    req.params.id
  );
  return res.send(results);
});

export { userRouter };

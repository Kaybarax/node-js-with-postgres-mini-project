import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import config from "../typeorm.config";

export const PostgresDataSource = new DataSource({
  ...config,
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
});

import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres", // Replace with your PostgreSQL username
  password: "password", // Replace with your PostgreSQL password
  database: "energy_consumption_calculator", // Create this database in your PostgreSQL instance
  synchronize: true,
  logging: false,
  entities: [__dirname + "/entities/**/*.ts"],
};

export default config;

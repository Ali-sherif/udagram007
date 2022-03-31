import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  'postgres://postgres:postgres@database-1.cxc0njxiggnk.us-east-1.rds.amazonaws.com:5432/postgres'
);

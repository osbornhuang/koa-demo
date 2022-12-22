import { Sequelize } from "sequelize";
import config from "../db.config";
const instance = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: "postgres"
});
export default instance;

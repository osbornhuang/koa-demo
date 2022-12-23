import { Sequelize } from "sequelize";
import config from "../db.config.js";
const instance = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    idle: 30000
  }
});
export default instance;

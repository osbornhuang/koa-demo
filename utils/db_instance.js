import { Pool } from "pg";
import config from "../db.config";
const pool = new Pool(config);
pool.on("error", (err, client) => {
  console.error(err);
});
const queryAsync = async (sql, params) => {
  try {
    const result = await pool.query(sql, params);
    return Promise.resolve(result);
  } catch (err) {
    return queryErrorHandler();
  }
};
const queryErrorHandler = err => {
  console.error(err.message, err);
  return Promise.reject(err.meesage);
};
export default { queryAsync, queryErrorHandler };

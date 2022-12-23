import PG from "pg";
import config from "../db.config.js";
const pool = new PG.Pool(config);
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
  console.error(err);
  return Promise.reject(err);
};
export { queryAsync, queryErrorHandler };

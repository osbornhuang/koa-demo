import { sign } from "jsonwebtoken";
import config from "../app.config";
const createToken = userId => {
  try {
    const token = sign({ name: userId }, config.JWT.SECRECT_KEY, {
      expiresIn: config.JWT.EXPIRE_TIME
    });
    return Promise.resolve(token);
  } catch (err) {
    console.error(err.message, err);
    return Promise.reject(err.message);
  }
};
export default { createToken };

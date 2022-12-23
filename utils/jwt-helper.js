import jwt from "jsonwebtoken";
import config from "../app.config.js";
const createToken = userId => {
  try {
    const token = jwt.sign({ name: userId }, config.JWT.SECRECT_KEY, {
      expiresIn: config.JWT.EXPIRE_TIME
    });
    return Promise.resolve(token);
  } catch (err) {
    console.error(err.message, err);
    return Promise.reject(err.message);
  }
};
export default createToken;

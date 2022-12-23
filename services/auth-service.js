import crypto from "crypto";
import { UserModel } from "../models/index.js";
import createToken from "../utils/jwt-helper.js";
const hash = crypto.createHash("sha512");
/**
 *
 * @param {string} userId
 * @param {string} userPassword
 * @returns
 */
const verifyUser = async (userId, userPassword) => {
  const response = {
    code: 200,
    data: {}
  };
  hash.update(userPassword);
  const hashPassword = hash.digest("hex");
  const user = await UserModel.findOne({
    where: {
      UserId: userId,
      UserPassword: hashPassword
    }
  });
  if (user) {
    const userToken = await createToken(userId);
    response.code = 200;
    response.data = { token: userToken };
  } else {
    response.code = 404;
  }
  return Promise.resolve(response);
};
export { verifyUser };

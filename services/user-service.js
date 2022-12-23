import crypto from "crypto";
import { UserModel } from "../models/index.js";
const hash = crypto.createHash("sha512");
const queryUsers = async () => {
  const users = await UserModel.findAll();
  let userList = users.map(u => {
    const { UserId, UserName, UserBalance } = u;
    return { UserId, UserName, UserBalance };
  });
  return Promise.resolve(userList);
};
const queryUser = async userId => {
  const user = await UserModel.findOne({ UserId: userId });
  const { UserId, UserName, UserBalance } = user;
  return Promise.resolve({ UserId, UserName, UserBalance });
};
const checkUserBalance = async (userId, investTotal) => {
  const user = await UserModel.findOne({ UserId: userId });
  const { UserBalance } = user;
  return Promise.resolve(UserBalance > investTotal);
};
export { queryUsers, queryUser };

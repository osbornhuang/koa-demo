import crypto from "crypto";
import { UserModel } from "../models/index.js";
import { queryUser, queryUsers } from "../services/user-service.js";
import responseBase from "./response-base.js";
const hash = crypto.createHash("sha512");
const getAllUser = async ctx => {
  const users = await queryUsers();
  responseBase.data = users;
  ctx.body = { ...responseBase };
};
const getUser = async ctx => {
  const { id } = ctx.params;
  const user = await queryUser(id);
  response.data = user;
  ctx.body = { ...response };
};
const createUser = async ctx => {
  const { userId, userName, userPassword, userEmail } = ctx.request.body;
  hash.update(userPassword);
  const hashPwd = hash.digest("hex");
  await UserModel.create({
    UserId: userId,
    UserName: userName,
    UserPassword: hashPwd,
    UserMail: userEmail
  });
  responseBase.data = { msg: "create success" };
  ctx.body = responseBase;
};
export { getAllUser, getUser, createUser };

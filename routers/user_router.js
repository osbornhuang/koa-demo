import KoaRouter from "koa-router";
import { UserController } from "../controllers";
const userRouter = new KoaRouter();

const routePath = {
  Root: "/",
  GetAll: "/users",
  GetUser: "/user/:id",
  CreateUser: "/user",
  UpateUser: "/user/:id",
  DeleteUser: "/user/:id"
};
//根
userRouter.get(routePath.Root, async ctx => {
  ctx.body = "user list!";
});
//取得所有用戶
userRouter.get(routePath.GetAll, UserController.getAllUser);
//取得單一用戶
userRouter.get(routePath.GetUser, UserController.getUser);
//建立用戶
userRouter.post(routePath.CreateUser, UserController.createUser);
//更新用戶資料
userRouter.put(routePath.UpateUser, async ctx => {
  const { id } = ctx.params;
  ctx.body = `update user id:${id}`;
});
//刪除/凍結用戶
userRouter.del(routePath.DeleteUser, async ctx => {
  const { id } = ctx.params;
  ctx.body = `remove user id:${id}`;
});
export default userRouter;

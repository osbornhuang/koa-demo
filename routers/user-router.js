import KoaRouter from "koa-router";
const userRouter = new KoaRouter({
  prefix: "/api/v1"
});
const definedPath = {
  Root: "/",
  GetAll: "/users",
  GetUser: "/user/:id",
  CreateUser: "/user",
  UpateUser: "/user/:id",
  DeleteUser: "/user/:id"
};
userRouter.get(definedPath.Root, async ctx => {
  ctx.body = "hello koa !";
});
userRouter.get(definedPath.GetAll, async ctx => {
  ctx.body = "get all users";
});
userRouter.get(definedPath.GetUser, async ctx => {
  const { id } = ctx.params;
  ctx.body = `get user id:${id}`;
});
userRouter.post(definedPath.CreateUser, async ctx => {
  ctx.body = "create user";
});
userRouter.put(definedPath.UpateUser, async ctx => {
  const { id } = ctx.params;
  ctx.body = `update user id:${id}`;
});
userRouter.del(definedPath.DeleteUser, async ctx => {
  const { id } = ctx.params;
  ctx.body = `remove user id:${id}`;
});
export default userRouter;

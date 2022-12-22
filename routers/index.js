import KoaRouter from "koa-router";
import config from "../app.config";
import { verifyUser } from "../services/authService";
import bankRouter from "./bank-router";
import userRouter from "./user-router";
const router = new KoaRouter({
  prefix: "/api/v1"
});
const definedPath = {
  Root: "/",
  SignIn: "/signin",
  SignUp: "/signup"
};
router.get(definedPath.Root, async ctx => {
  ctx.body = "welcome koa bank";
});
router.post(definedPath.SignIn, async ctx => {
  const { userId, pwd } = ctx.request.body;
  const res = await verifyUser(userId, pwd);
  if (res.code === 200) {
    ctx.cookies.set("koa-token", res.data.token, {
      domain: "localhost",
      path: "/",
      maxAge: config.JWT.EXPIRE_TIME * 60 * 1000,
      httpOnly: true,
      overwrite: true
    });
  }
  ctx.body = { ...res };
});
router.use("/user", userRouter.routes(), userRouter.allowedMethods());
router.use("/bank", bankRouter.routes(), userRouter.allowedMethods());
export default router;

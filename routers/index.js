import jwt from "koa-jwt";
import KoaRouter from "koa-router";
import config from "../app.config.js";
import { verifyUser } from "../services/auth-service.js";
import bankRouter from "./bank-router.js";
import userRouter from "./user-router.js";

const router = new KoaRouter({
  prefix: "/api/v1"
});
const definedPath = {
  Root: "/",
  SignIn: "/signin",
  SignUp: "/signup"
};
const { SECRECT_KEY } = config.JWT_SET;
router.use(
  jwt({
    SECRECT_KEY,
    cookie: "koa-token",
    debug: true
  }).unless({ path: [/^\/signin/, /^\/swagger/] })
);
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
router.use("/user-service", userRouter.routes(), userRouter.allowedMethods());
router.use("/bank-service", bankRouter.routes(), userRouter.allowedMethods());
export default router;

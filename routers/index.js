import KoaRouter from "koa-router";
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
});
router.use("/user", userRouter.routes(), userRouter.allowedMethods());
router.use("/bank", bankRouter.routes(), userRouter.allowedMethods());
export default router;

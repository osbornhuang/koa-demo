import KoaRouter from "koa-router";
const bankRouter = new KoaRouter({
  prefix: "/api/v1"
});
const definedPath = {
  Root: "/",
  GetFunds: "/funds",
  GetFund: "/fund/:id",
  CreateFund: "/fund",
  UpdateFund: "/fund/:id",
  DeleteFund: "/fund/:id"
};
export default bankRouter;

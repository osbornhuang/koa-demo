import KoaRouter from "koa-router";
import { BankController } from "../controllers/index.js";
const bankRouter = new KoaRouter();
const routePath = {
  Root: "/",
  GetFunds: "/funds",
  GetFund: "/fund/:id",
  CreateFund: "/fund",
  UpdateFund: "/fund/:id",
  DeleteFund: "/fund/:id",
  PurchaseFund: "/fund/purchase"
};
bankRouter.get(routePath.Root, async ctx => {
  ctx.body = "bank service";
});
bankRouter.get(routePath.GetFunds, BankController.getAllFund);
bankRouter.get(routePath.GetFund, BankController.getFund);
bankRouter.post(routePath.PurchaseFund, BankController.purchaseFund);
export default bankRouter;

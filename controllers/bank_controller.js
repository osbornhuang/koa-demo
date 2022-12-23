import { orderFund, queryFund, queryFunds } from "../services/bankService";
import responseBase from "./response_base";

const getAllFund = async ctx => {
  const funds = await queryFunds();
  responseBase.data = funds;
  ctx.body = { ...responseBase };
};
const getFund = async ctx => {
  const { id } = ctx.params;
  const fund = await queryFund(id);
  response.data = fund;
  ctx.body = { ...response };
};
const purchaseFund = async ctx => {
  const { userId, fundId, investAmount } = ctx.request.body;
  try {
    const result = await orderFund(userId, fundId, investAmount);
    responseBase.data = { ...result };
    ctx.body = responseBase;
  } catch (error) {
    ctx.status = 500;
  }
};
export { getAllFund, getFund, purchaseFund };

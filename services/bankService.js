import { add, format, parse, startOfDay } from "date-fns";
import { FundModel, FundTypeModel, TradeLogModel, TradeQueueModel } from "../models";
const getBankCloseTime = () => {
  const date = format(new Date(), "yyyy-MM-dd");
  const formatDesc = "yyyy-MM-dd HH:mm:ss";
  const tz = "+08";
  const closeTime = `${date} 14:00:00`;
  const utcCloseTime = parse(closeTime + " " + tz, formatDesc + " X", new Date());
  return utcCloseTime.valueOf();
};
/**
 *
 * @param {number} tradeDate
 * @returns
 */
const getNextTradeDate = tradeDate => {
  const baseDate = startOfDay(new Date(tradeDate));
  const nextTradeDate = add(baseDate, { days: 1, hours: 9 });
  return nextTradeDate.valueOf();
};
const queryFunds = async () => {
  const funds = await FundModel.findAll();
  const fundlist = funds.map(fund => {
    const { FundId, FundName, FundType, FundNAV, FundCurrency } = fund;
    return { FundId, FundName, FundType, FundNAV, FundCurrency };
  });
  return Promise.resolve(fundlist);
};
/**
 *
 * @param {string} fundId
 * @returns
 */
const queryFund = async fundId => {
  const fund = await FundModel.findOne({
    FundId: fundId
  });
  const { FundId, FundName, FundType, FundNAV, FundCurrency } = fund;
  return Promise.resolve({ FundId, FundName, FundType, FundNAV, FundCurrency });
};
/**
 *
 * @param {string} userId
 * @param {string} fundId
 * @param {number} investTotal
 * @returns
 */
const orderFund = async (userId, fundId, investTotal) => {
  const fund = await FundModel.findOne({
    FundId: fundId
  });
  const { FundType, FundNAV } = fund;
  const fundTypeInfo = await FundTypeModel.findOne({ TypeId: FundType });
  const { FundFee } = fundTypeInfo;
  const orderNAVTotal = FundNAV * investTotal;
  const tradeFee = orderNAVTotal * FundFee;
  const log = await TradeLogModel.create({
    UserId: userId,
    FundId: FundId,
    TradeNAV: FundNAV,
    TradeAmount: investTotal,
    TradeFee: tradeFee,
    TradeBalance: Math.round((orderNAVTotal + tradeFee) * 100) / 100
  });
  if (log) {
    const { TradeSeq } = log;
    let tradeDate = Date.now();
    let isOverCloseTime = tradeDate > getBankCloseTime();
    tradeDate = isOverCloseTime ? getNextTradeDate(tradeDate) : tradeDate;
    await TradeQueueModel.create({
      TradeSeq: TradeSeq,
      UserId: userId,
      TriggerDate: tradeDate
    });
    return Promise({
      isOverCloseTime,
      tradeDate
    });
  } else {
    return Promise.reject("failure order fund");
  }
};
export { queryFunds, queryFund, orderFund };

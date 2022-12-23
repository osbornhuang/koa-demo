import { CronJob } from "cron";
import { format } from "date-fns";
import config from "../cron.config.js";
const processTradeQueues = new CronJob(
  config.DailySchedule,
  function () {
    console.log(`[${format(Date.now(), "yyyy-MM-dd HH:mm:ss")}] process trande queue`);
  },
  null,
  true,
  "Asia/Taipei"
);
const processUpdateFundNAV = new CronJob(
  config.FundNAVUpdateSchedule,
  function () {
    console.log(`[${format(Date.now(), "yyyy-MM-dd HH:mm:ss")}] process update fund NAV`);
  },
  null,
  true,
  "Asia/Taipei"
);
export { processTradeQueues, processUpdateFundNAV };

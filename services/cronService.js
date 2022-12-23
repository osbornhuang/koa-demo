import { CronJob } from "cron";
import config from "../cron.config";
const processTradeQueues = new CronJob(
  config.DailySchedule,
  function () {
    console.log("process trande queue");
  },
  null,
  true,
  "Asia/Taipei"
);
const processUpdateFundNAV = new CronJob(
  config.FundNAVUpdateSchedule,
  function () {
    console.log("process update fund NAV");
  },
  null,
  true,
  "Asia/Taipei"
);
export { processTradeQueues, processUpdateFundNAV };

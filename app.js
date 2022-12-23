import Koa from "koa";
import { koaBody } from "koa-body";
import bodyParser from "koa-bodyparser";
import json from "koa-json";
import logger from "koa-logger";
import config from "./app.config.js";
import authorizationHandler from "./middleware/authorization-handler.js";
import httpVerbTrace from "./middleware/http-verb-trace.js";
import swaggerUI from "./middleware/swagger-ui.js";
import router from "./routers/index.js";
import { processTradeQueues, processUpdateFundNAV } from "./services/cron-service.js";
import dbinit from "./utils/db-init.js";
const app = new Koa();

app.use(koaBody());
app.use(bodyParser());
app.use(logger());
app.use(json());
app.use(httpVerbTrace);
app.use(authorizationHandler);
app.use(swaggerUI);
app.use(router.routes(), router.allowedMethods());
app.on("error", function (err, ctx) {
  console.log("server error", err);
});
app.listen(config.PORT, async () => {
  try {
    await dbinit();
  } catch (err) {
    console.error(err);
  }
  console.log(`app start`);
  console.log(`listen http://localhost:${config.PORT}`);
  processTradeQueues.start();
  processUpdateFundNAV.start();
});
export default app;

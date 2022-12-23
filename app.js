import Koa from "koa";
import koaBody from "koa-body";
import bodyParser from "koa-bodyparser";
import json from "koa-json";
import logger from "koa-logger";
import { koaSwagger } from "koa2-swagger-ui";
import config from "./app.config";
import router from "./routers";
import { processTradeQueues, processUpdateFundNAV } from "./services/cronService";
import dbinit from "./utils/db_init";
const app = new Koa();

app.use(koaBody);
app.use(bodyParser);
app.use(logger);
app.use(json());
app.use(async (ctx, next) => {
  const startTime = Date.now();
  await next();
  const ms = Date.now() - startTime;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use((ctx,next)=>{
  try {
    await next();
  } catch (err) {
    if(401==err.status){
      ctx.status=401;
      ctx.body='authorization error';
    }else{
      throw err;
    }
  }
});
app.use(
  koaSwagger({
    routePrefix: "/swagger", // host at /swagger instead of default /docs
    swaggerOptions: {
      url: `http://localhost:${config.PORT}/v1/swagger.json`
    }
  })
);
app.use(router.routes(), router.allowedMethods());
app.listen(config.PORT, async () => {
  await dbinit();
  processTradeQueues.start();
  processUpdateFundNAV.start();
  console.log(`app start`);
  console.log(`listen http://localhost:${config.PORT}`);
});

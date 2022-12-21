import Koa from "koa";
import koaBody from "koa-body";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
const app = new Koa();

app.use(koaBody);
app.use(bodyParser);
app.use(logger);
app.use(async (ctx, next) => {
  const startTime = Date.now();
  await next();
  const ms = Date.now() - startTime;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(5858, () => {
  console.log(`app start`);
  console.log(`listen http://localhost:5858`);
});

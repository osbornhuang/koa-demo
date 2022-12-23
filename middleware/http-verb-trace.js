const httpVerbTrace = async (ctx, next) => {
  const startTime = Date.now();
  await next();
  const ms = Date.now() - startTime;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
};
export default httpVerbTrace;

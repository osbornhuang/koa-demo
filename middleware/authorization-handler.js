const authorizationHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = "authorization error";
    } else {
      throw err;
    }
  }
};
export default authorizationHandler;

import { koaSwagger } from "koa2-swagger-ui";
import config from "../app.config.js";
const swaggerUI = koaSwagger({
  routePrefix: "/swagger", // host at /swagger instead of default /docs
  swaggerOptions: {
    url: `http://localhost:${config.PORT}/v1/swagger.json`
  }
});
export default swaggerUI;

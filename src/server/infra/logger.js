import { requestContext } from "@fastify/request-context";

import defaultLogger from "../libs/logger.js";
import { handlerAsyncLocalStorage } from "../utils/async-store.js";

export const loggerInfra = new Proxy(defaultLogger, {
  get(target, property, receiver) {
    target =
      requestContext.get("logger") ??
      handlerAsyncLocalStorage.getStore().logger;
    return Reflect.get(target, property, receiver);
  },
});

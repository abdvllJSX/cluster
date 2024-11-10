import { AsyncLocalStorage } from "async_hooks";

export const handlerAsyncLocalStorage = new AsyncLocalStorage();

export const executeWithAsyncStore = (consumer, message, channel, asyncStore) =>
  handlerAsyncLocalStorage.run(asyncStore, () => consumer(message, channel));

import { Dispatchable } from "../../Application/type/Dispatchable";
import dispatcherConfig from "./dispatcher.config";

type Constructor = abstract new (...args: any[]) => {};

const withDispatcher = <TBase extends Constructor>(Base: TBase) => {
  return class {
    dispatch(dispatchableMessage: Dispatchable): Promise<any|void> | never {
        const dispachableClass = dispatchableMessage?.constructor?.name;
        const handler = dispatcherConfig.handlers[dispachableClass] ?? null;
        if (handler) {
          return handler.handle(dispatchableMessage);
        }
        throw new Error('No handler found for the message');
    }
  };
}

export default withDispatcher;
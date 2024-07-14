import { Dispatchable } from "./type/Dispatchable";

interface HandlerInterface {
    handle(message: Dispatchable): Promise<any|void>;
}

export default HandlerInterface;

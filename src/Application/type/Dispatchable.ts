import AsyncCommandInterface from "../AsyncCommandInterface";
import QueryInterface from "../QueryInterface";
import SyncCommandInterface from "../SyncCommandInterface";

export type Dispatchable = AsyncCommandInterface|SyncCommandInterface|QueryInterface;

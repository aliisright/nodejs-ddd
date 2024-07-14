import Thing from "../Entity/Thing";
import { ThingCreationPayload } from "../type/ThingCreationPayload";
import { ThingUpdatePayload } from "../type/ThingUpdatePayload";

interface ThingRepositoryInterface {
    find: (id: number) => Promise<Thing>;
    getAll: () => Promise<Thing[]>;
    create: (payload: ThingCreationPayload) => Promise<Thing>;
    update: (id: number, payload: ThingUpdatePayload) => Promise<Thing>;
}

export default ThingRepositoryInterface;
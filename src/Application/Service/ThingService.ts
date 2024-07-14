import Thing from "../../Domain/Entity/Thing";
import ThingRepositoryInterface from "../../Domain/Repository/ThingRepositoryInterface";
import { ThingUpdatePayload } from "../../Domain/type/ThingUpdatePayload";

class ThingService {
    private thingRepository;

    constructor(thingRepository: ThingRepositoryInterface) {
        this.thingRepository = thingRepository;
    }

    getAllThings = async (): Promise<Thing[]> => {
        return this.thingRepository.getAll();
    }

    createThing = async (id: number): Promise<Thing> => {
        const payload = { id };
        return this.thingRepository.create(payload);
    }

    updateThing = async (id: number, payload: ThingUpdatePayload): Promise<Thing> => {
        return this.thingRepository.update(id, payload);
    }
}

export default ThingService;

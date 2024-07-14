import Thing from '../../Domain/Entity/Thing';
import ThingRepositoryInterface from '../../Domain/Repository/ThingRepositoryInterface';
import { ThingCreationPayload } from '../../Domain/type/ThingCreationPayload';
import { ThingUpdatePayload } from '../../Domain/type/ThingUpdatePayload';

class ThingRepository implements ThingRepositoryInterface {
    find = async (id: number): Promise<Thing> => {
        return new Thing(id);
    };

    getAll = async (): Promise<Thing[]> => {
        return [new Thing(1)];
    };

    create = async (payload: ThingCreationPayload) => {
        const { id } = payload;
        return new Thing(id);
    };

    update = async (id: number, payload: ThingUpdatePayload) => {
        const { something } = payload;
        const thing = new Thing(id);
        thing.something = something;
        return thing;
    };
}

export default ThingRepository;
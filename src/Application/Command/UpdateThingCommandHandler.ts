import Thing from "../../Domain/Entity/Thing";
import ThingService from "../Service/ThingService";
import SyncCommandInterface from "../SyncCommandInterface";
import UpdateThingCommand from "./UpdateThingCommand";

class UpdateThingCommandHandler implements SyncCommandInterface {
    private thingService: ThingService;

    constructor(thingService: ThingService) {
        this.thingService = thingService;    
    }

    handle = async (updateThingCommand: UpdateThingCommand): Promise<Thing> => {
        const { id, data } = updateThingCommand;
        return this.thingService.updateThing(id, data);
    }
}

export default UpdateThingCommandHandler;

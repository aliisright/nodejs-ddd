import HandlerInterface from "../HandlerInterface";
import ThingService from "../Service/ThingService";
import CreateThingCommand from "./CreateThingCommand";

class CreateThingCommandHandler implements HandlerInterface {
    private thingService: ThingService;

    constructor(thingService: ThingService) {
        this.thingService = thingService;    
    }

    handle = async (createThingCommand: CreateThingCommand): Promise<void> => {
        const { thingId } = createThingCommand;
        this.thingService.createThing(thingId);
    }
}

export default CreateThingCommandHandler;

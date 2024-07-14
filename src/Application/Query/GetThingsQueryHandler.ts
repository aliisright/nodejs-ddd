import Thing from "../../Domain/Entity/Thing";
import HandlerInterface from "../HandlerInterface";
import ThingService from "../Service/ThingService";
import GetThingsQuery from "./GetThingsQuery";

class GetThingsQueryHandler implements HandlerInterface {
    private thingService: ThingService;

    constructor(thingService: ThingService) {
        this.thingService = thingService;    
    }

    handle = async (getThingsQuery: GetThingsQuery): Promise<Thing[]> => {
        return await this.thingService.getAllThings();
    }
}

export default GetThingsQueryHandler;

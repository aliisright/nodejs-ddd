import ThingService from "../../Application/Service/ThingService";
import ThingRepository from "../Repository/ThingRepository";

class ThingServiceFactory {
    public static make = (): ThingService => {
        const thingRepository = new ThingRepository();
        return new ThingService(thingRepository);
    }
}

export default ThingServiceFactory;
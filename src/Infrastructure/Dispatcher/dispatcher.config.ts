import CreateThingCommandHandler from "../../Application/Command/CreateThingCommandHandler";
import UpdateThingCommandHandler from "../../Application/Command/UpdateThingCommandHandler";
import HandlerInterface from "../../Application/HandlerInterface";
import GetThingsQueryHandler from "../../Application/Query/GetThingsQueryHandler";
import ThingService from "../../Application/Service/ThingService";
import ThingServiceFactory from "../Factory/ThingServiceFactory";
import ThingRepository from "../Repository/ThingRepository";

type dispatcherConfig_handlers = {
    [key: string]: HandlerInterface,
}

const config: { handlers: dispatcherConfig_handlers } = {
    handlers: {
        GetThingsQuery: new GetThingsQueryHandler(ThingServiceFactory.make()),
        CreateThingCommand: new CreateThingCommandHandler(ThingServiceFactory.make()),
        UpdateThingCommand: new UpdateThingCommandHandler(ThingServiceFactory.make()),
    },
};

export default config;

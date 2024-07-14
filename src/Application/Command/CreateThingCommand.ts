import AsyncCommandInterface from "../AsyncCommandInterface";

class CreateThingCommand implements AsyncCommandInterface {
    private _thingId: number;

    constructor(thingId: number) {
        this._thingId = thingId;    
    }

    public get thingId(): number {
        return this._thingId;
    }
}

export default CreateThingCommand;
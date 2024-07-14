import { ThingUpdatePayload } from "../../Domain/type/ThingUpdatePayload";
import AsyncCommandInterface from "../AsyncCommandInterface";

class UpdateThingCommand implements AsyncCommandInterface {
    private _id: number;
    private _data: ThingUpdatePayload = {};

    constructor(id: number, data: ThingUpdatePayload) {
        this._id = id;
        this._data = data;
    }

    public get id(): number {
        return this._id;
    }

    public get data(): ThingUpdatePayload {
        return this._data;
    }
}

export default UpdateThingCommand;
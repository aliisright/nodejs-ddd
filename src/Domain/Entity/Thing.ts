class Thing {
    private _id: number;
    private _something?: string;
    private _createdAt: EpochTimeStamp = Date.now();
    private _updatedAt: EpochTimeStamp = Date.now();
    private _deletedAt: EpochTimeStamp|null = null;

    constructor(id: number) {
        this._id = id;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get something(): string|undefined {
        return this._something;
    }

    public set something(something: string|undefined) {
        this._something = something;
    }

    public get createdAt(): number {
        return this._createdAt;
    }

    public set createdAt(createdAt: EpochTimeStamp) {
        this._createdAt = createdAt;
    }


    public get updatedAt(): number {
        return this._updatedAt;
    }

    public set updatedAt(updatedAt: EpochTimeStamp) {
        this._updatedAt = updatedAt;
    }

    public get deletedAt(): number|null {
        return this._deletedAt;
    }

    public set deletedAt(deletedAt: EpochTimeStamp|null) {
        this._deletedAt = deletedAt;
    }
}

export default Thing;
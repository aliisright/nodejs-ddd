import { Request, Response } from 'express';
import AbstractController from '../../../AbstractController';
import GetThingsQuery from '../../../../../Application/Query/GetThingsQuery';
import CreateThingCommand from '../../../../../Application/Command/CreateThingCommand';
import UpdateThingCommand from '../../../../../Application/Command/UpdateThingCommand';

class ThingController extends AbstractController {
    index = async (req: Request, res: Response): Promise<void> => {
        const result = await this.dispatch(new GetThingsQuery());
        res.json({
            success: true,
            data: result,
        }).status(200);
    }

    create = async (req: Request, res: Response): Promise<void> => {
        const { id } = req?.body ?? {};
        const result = this.dispatch(new CreateThingCommand(id));
        res.json({
            success: true,
            message: 'requested',
        }).status(201);
    }

    update = async (req: Request, res: Response): Promise<void> => {
        const { id } = req?.params ?? {};
        const result = await this.dispatch(new UpdateThingCommand(Number(id), req?.body));
        res.json({
            success: true,
            data: result,
        }).status(200);
    }
}

export default ThingController;
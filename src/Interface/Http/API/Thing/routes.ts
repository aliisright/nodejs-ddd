import express, { Request, Response } from 'express';
import ThingController from './Controller/ThingController';

export const thingRoutes = express.Router();

const thingController = new ThingController();

thingRoutes.get('/', (req: Request, res: Response) => {
    thingController.index(req, res);
});

thingRoutes.post('/', (req: Request, res: Response) => {
    thingController.create(req, res);
});

thingRoutes.put('/:id', (req: Request, res: Response) => {
    thingController.update(req, res);
});
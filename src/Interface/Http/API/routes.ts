import express from 'express';
import { thingRoutes } from './Thing/routes';

export const apiRoutes = express.Router();

apiRoutes.use('/thing', thingRoutes);

import express from 'express';
import { apiRoutes } from './API/routes';

export const routes = express.Router();

routes.use('/api', apiRoutes);

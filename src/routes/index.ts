import express from 'express';
import { dealsRouter } from './deals-route';

export const routes = express.Router();

routes.use('/api/deals', dealsRouter);

import express, { Request, Response } from 'express';

import { sendSuccessResponse, MESSAGES } from '../utils';
import { messages } from '../controllers/routes'

const { HEALTH_CHECK } = MESSAGES;
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    sendSuccessResponse(res, 200, HEALTH_CHECK)
});

router.use('/messages', messages)

export default router;

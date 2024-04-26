import express, { Request, Response } from 'express';

import { sendSuccessResponse, MESSAGES } from '../utils';

const { HEALTH_CHECK } = MESSAGES;
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    sendSuccessResponse(res, 200, HEALTH_CHECK)
});

export default router;

import express, { Request, Response } from 'express';

import { sendSuccessResponse, MESSAGES } from '../utils';
import { message, user } from '../controllers/routes'

const { HEALTH_CHECK } = MESSAGES;
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    sendSuccessResponse({
        res,
        statusCode: 200,
        message: HEALTH_CHECK,
        data: {}
    })
});

router.use('/messages', message);
router.use('/users', user);

export default router;

import express from 'express';

import { getMessagesHandler } from '.'

const router = express.Router();

router.get('/', getMessagesHandler);

export default router;
import messages from './controller';
import express from 'express';

const router = express.Router();
const { getMessages } = messages;

router.get('/:uid', getMessages);

export default router;
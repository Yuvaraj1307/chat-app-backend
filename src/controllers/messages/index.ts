import { Request, Response } from "express";

import { getMessages } from "../../services/messages";
import { MESSAGES, sendErrorResponse, sendSuccessResponse } from "../../utils";

const { MESSAGES_FETCHING_SUCCESS, MESSAGES_FETCHING_ERROR, INTERNAL_SERVER_ERROR } = MESSAGES;

/**
 * 
 * @param {Request} _req 
 * @param {Response} res 
 */
const getMessagesHandler = async (_req: Request, res: Response): Promise<void> => {
    try {
        const messages = await getMessages()
        sendSuccessResponse(res, 200, MESSAGES_FETCHING_SUCCESS, { messages })
    } catch (error) {
        console.error(`${MESSAGES_FETCHING_ERROR}:`, error);
        sendErrorResponse(res, 500, INTERNAL_SERVER_ERROR);
    }
}

export { getMessagesHandler };
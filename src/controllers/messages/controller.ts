import { Request, Response } from "express";

import MessageService from "../../services/messages/service";
import { MESSAGES, sendErrorResponse, sendSuccessResponse } from "../../utils";

const { MESSAGES_FETCHING_SUCCESS, MESSAGES_FETCHING_ERROR, INTERNAL_SERVER_ERROR, USER_UID_IS_MISSING, VALIDATION_ERROR } = MESSAGES;

class MessagesController {
    /**
     * @param {Request} _req 
     * @param {Response} res 
     */
    async getMessages(req: Request, res: Response): Promise<void> {
        try {
            const { uid }: { uid?: string } = req.params;
            if (!uid) {
                sendErrorResponse({
                    res,
                    statusCode: 400,
                    error: {
                        type: VALIDATION_ERROR,
                        message: USER_UID_IS_MISSING,
                    },
                })
                return;
            }
            const messages = await MessageService.getMessages(uid)
            sendSuccessResponse({
                res,
                statusCode: 200,
                message: MESSAGES_FETCHING_SUCCESS,
                data: { messages },
            })
        } catch (error: any) {
            console.error(`${MESSAGES_FETCHING_ERROR}:`, error);
            sendErrorResponse({
                res,
                statusCode: 500,
                error: {
                    type: INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            })
        }
    }
}

const messages = new MessagesController();
export default messages;

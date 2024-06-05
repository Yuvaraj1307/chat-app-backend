import { Request, Response } from "express";
import UserService from '@services/users/service';
import { sendErrorResponse, validateObject, MESSAGES, uuidv4, sendSuccessResponse } from "@utils";

const { USER_CREATION_ERROR, USER_CREATION_SUCCESS, VALIDATION_ERROR, USERS_FETCHING_ERROR, USERS_FETCHING_SUCCESS } = MESSAGES;

class UsersController {
    /**
     * @param {Request} req
     * @param {Response} res
     */
    async getUsers(_req: Request, res: Response): Promise<void> {
        try {
            const users = await UserService.getUsers();
            sendSuccessResponse({
                res,
                statusCode: 200,
                message: USERS_FETCHING_SUCCESS,
                data: { users }
            })
        } catch (error: any) {
            sendErrorResponse({
                res,
                statusCode: 500,
                error: {
                    type: USERS_FETCHING_ERROR,
                    name: error.name,
                    message: error.message,
                    cause: error.cause
                }
            })
        }
    }
    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const required = ['emailId', 'phoneNumber', 'firstName', 'lastName']
            const { emailId, firstName, lastName, phoneNumber, middleName }: TUser = req.body;
            const validation = validateObject({ emailId, firstName, lastName, phoneNumber, middleName }, required);
            if (validation) {
                sendErrorResponse({
                    res,
                    statusCode: 400,
                    error: {
                        type: VALIDATION_ERROR,
                        message: `Invalid ${validation.join(',')}`
                    }
                })
                return;
            }
            const uid = uuidv4();
            await UserService.createUser({ emailId, firstName, lastName, middleName, phoneNumber, uid, timestamp: new Date() });
            sendSuccessResponse({
                res,
                statusCode: 201,
                message: USER_CREATION_SUCCESS,
                data: { uid }
            })
        } catch (error: any) {
            sendErrorResponse({
                res,
                statusCode: 500,
                error: {
                    type: USER_CREATION_ERROR,
                    name: error.name,
                    message: error.message,
                    cause: error.cause
                }
            })
        }
    }
}

const users = new UsersController();
export default users;

import { Response } from "express";

/**
 * Send a success response with status code, message and data.
 * @param {Response} res - The response object.
 * @param {number} statusCode - The HTTP status code.
 * @param {string} message - The success message.
 * @param {T} data - The data.
 */
const sendSuccessResponse = <T>(res: Response, statusCode: number, message: string, data?: T) => {
    res.status(statusCode).json({ success: true, message, data });
};

/**
 * Send a error response with a status code and message.
 * @param {Response} res
 * @param {number} statusCode
 * @param {string} message
 */
const sendErrorResponse = (res: Response, statusCode: number, message: string) => {
    res.status(statusCode).json({ success: false, error: { message } });
};

export { sendSuccessResponse, sendErrorResponse };
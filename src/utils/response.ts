import { Response } from "express";

type TParams = {
    res: Response;
    statusCode: number;
}

type TSuccessParams<T> = TParams & {
    data: T;
    message: string;
}

type TErrorParams = TParams & {
    error: {
        type: string;
        message: string;
        name?: string;
        cause?: unknown;
    }
}

/**
 * Send a success response with status code, message and data.
 * @param {TSuccessParams} params
 */
const sendSuccessResponse = <T>(params: TSuccessParams<T>) => {
    const { message, res, statusCode, data } = params;
    res.status(statusCode).json({ success: true, message, data });
};

/**
 * Send a error response with a status code and message.
 * @param {TErrorParams} params
 */
const sendErrorResponse = (params: TErrorParams) => {
    const { error, res, statusCode } = params;
    res.status(statusCode).json({ success: false, error });
};

export { sendSuccessResponse, sendErrorResponse };
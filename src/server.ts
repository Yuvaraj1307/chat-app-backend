import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import routes from '@routes';
import DatabaseManager from './db/dbManager';
import { MESSAGES, sendErrorResponse, setUpSocketIo, CONSTANTS } from '@utils';

const { INTERNAL_SERVER_ERROR, SERVER_LISTENING } = MESSAGES;

const { BASE_PATH, PORT } = CONSTANTS;
const dbManager = new DatabaseManager();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

app.use(express.json());
app.use(cors());

setUpSocketIo(io);

(
    async () => {
        try {
            await dbManager.connect();
            server.listen(PORT, () => {
                console.log(`${SERVER_LISTENING}`);
            });
        } catch (error) {
            console.error("Failed to connect to the database:", error);
            process.exit(1);
        }
    }
)();

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log('Error', error);
    sendErrorResponse({
        res,
        statusCode: 500,
        error: {
            type: INTERNAL_SERVER_ERROR,
            name: error.name,
            message: error.message,
            cause: error.cause
        }
    })
});

app.use(BASE_PATH as string, routes);

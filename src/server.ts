import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import routes from '@routes';
import { connect } from './db';
import { MESSAGES, sendErrorResponse, setUpSocketIo, CONSTANTS } from '@utils';

const { INTERNAL_SERVER_ERROR, SERVER_LISTENING } = MESSAGES;

const { BASE_PATH, PORT, ALLOWED_ORIGIN } = CONSTANTS

const app: any = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ALLOWED_ORIGIN,
    }
});

app.use(express.json());
app.use(cors());

setUpSocketIo(io);



app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log('Error', error);
    sendErrorResponse(res, 500, INTERNAL_SERVER_ERROR)
});

app.use(BASE_PATH as string, routes)

connect().then(() => {
    server.listen(PORT, () => {
        console.log(`${SERVER_LISTENING}`);
    });
}).catch((error) => {
    console.log('Failed to connect to MongoDB:', error);
})
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import routes from './routes';
import { connet } from './db';
import { MESSAGES, sendErrorResponse, setUpSocketIo } from './utils';

const { INTERNAL_SERVER_ERROR, SERVER_LISTENING } = MESSAGES;

const { BASE_PATH, PORT } = process.env

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cors());

setUpSocketIo(io)

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log('Error', error);
    sendErrorResponse(res, 500, INTERNAL_SERVER_ERROR)
});

app.use(BASE_PATH, routes)

connet().then(() => {
    server.listen(PORT, () => {
        console.log(`${SERVER_LISTENING} ${PORT}`);
    });
}).catch((error) => {
    console.log('Failed to connect to MongoDB:', error);
})
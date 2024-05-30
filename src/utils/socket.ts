import { Server, Socket } from 'socket.io';
import { EVENTS, MESSAGES } from '../utils';

/**
 * @param {Socket} io
 */
const setUpSocketIo = (io: Server) => {

    const { CONNECT, DISCONNECT, OFFLINE, ONLINE, RECEIVED_MESSAGE, SENT_MESSAGE, STOPPED_TYPING, TYPING } = EVENTS;
    const { USER_CONNECTED, USER_DISCONNECTED } = MESSAGES;

    io.on(CONNECT, (socket: Socket) => {
        console.log(USER_CONNECTED);

        socket.on(ONLINE, () => {
            socket.broadcast.emit(ONLINE, {});
        });

        // User starts typing
        socket.on(TYPING, (props: TEventTyping) => {
            const { endUserUid, userUid } = props;
            socket.to(endUserUid).emit(TYPING, { userUid });
        });

        // User stops typing
        socket.on(STOPPED_TYPING, (props: TEventTyping) => {
            const { endUserUid, userUid } = props;
            socket.to(endUserUid).emit(STOPPED_TYPING, { userUid });
        });

        // User sends a message
        socket.on(SENT_MESSAGE, (message: string) => {
            socket.broadcast.emit(RECEIVED_MESSAGE, message);
        });

        // User goes online
        socket.on(ONLINE, (username: string) => {
            socket.broadcast.emit(ONLINE, username);
        });

        // User goes offline
        socket.on(OFFLINE, (username: string) => {
            socket.broadcast.emit(OFFLINE, username);
        });

        socket.on(DISCONNECT, () => {
            console.log(USER_DISCONNECTED);
        });
    })
}

export { setUpSocketIo };
import { Server, Socket } from 'socket.io';

/**
 * @param {Socket} io
 */
const setUpSocketIo = (io: Server) => {
    io.on('connect', (socket: Socket) => {
        console.log('A user connected');

        // User starts typing
        socket.on('typing', (username: string) => {
            socket.broadcast.emit('typing', username);
        });

        // User stops typing
        socket.on('stop_typing', (username: string) => {
            socket.broadcast.emit('stop_typing', username);
        });

        // User sends a message
        socket.on('send_message', (message: string) => {
            socket.broadcast.emit('receive_message', message);
        });

        // User goes online
        socket.on('online', (username: string) => {
            socket.broadcast.emit('online', username);
        });

        // User goes offline
        socket.on('offline', (username: string) => {
            socket.broadcast.emit('offline', username);
        });

        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
    })
}

export { setUpSocketIo };
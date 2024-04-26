import { Server, Socket } from 'socket.io';

/**
 * @param {Socket} io
 */
const setUpSocketIo = (io: Server) => {
    io.on('connect', (socket: Socket) => {
        console.log('A user connected');

        // User starts typing
        socket.on('typing', (username: string) => {
            socket.to('chatroom').emit('userTyping', username);
        });

        // User stops typing
        socket.on('stopTyping', (username: string) => {
            socket.to('chatroom').emit('userStoppedTyping', username);
        });

        // User sends a message
        socket.on('sendMessage', (message: string) => {
            io.to('chatroom').emit('messageSent', message);
        });

        // User sends a private message
        socket.on('sendPrivateMessage', (data: { recipient: string; message: string }) => {
            io.to(data.recipient).emit('privateMessage', data.message);
        });

        // User goes online
        socket.on('online', (username: string) => {
            socket.broadcast.emit('userOnline', username);
        });

        // User goes offline
        socket.on('offline', (username: string) => {
            socket.broadcast.emit('userOffline', username);
        });

        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
    })
}

export { setUpSocketIo };
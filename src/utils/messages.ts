const MESSAGES = {
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    SERVER_LISTENING: '⚡ Server Listening on port',
    HEALTH_CHECK: 'Chat Server Health Check',
    MESSAGES_FETCHING_SUCCESS: 'Messages fetched successfully',
    MESSAGES_FETCHING_ERROR: 'Error fetching messages',
    MONGO_CONNECTION_SUCCESS: 'MongoDB connected successfully',
    MONGO_CONNECTION_FAILED: 'MongoDB failed to connect',
    MONGO_DB_NOT_INITIALIZED: 'MongoDB database is not initialized',
    USER_CONNECTED: 'User connected',
    USER_DISCONNECTED: 'User disconnected',
    CHAT_CREATED: 'Chat created',
    CHAT_DELETED: 'Chat deleted',
};

const EVENTS = {
    TYPING: 'typing',
    STOPPED_TYPING: 'stoppedTyping',
    ONLINE: 'online',
    OFFLINE: 'offline',
    SENT_MESSAGE: 'sentMessage',
    RECEIVED_MESSAGE: 'receivedMessage',
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
};

export { MESSAGES, EVENTS };

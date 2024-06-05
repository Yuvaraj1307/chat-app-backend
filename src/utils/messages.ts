import { CONSTANTS } from './constants';

const MESSAGES = {
    // App
    SERVER_LISTENING: `⚡ Server is now listening on port http://localhost:${CONSTANTS.PORT} 📌`,
    HEALTH_CHECK: 'Health Check: Chat Server',
    
    // MongoDB
    MONGO_CONNECTION_SUCCESS: 'MongoDB connection successful',
    MONGO_CONNECTION_FAILED: 'Failed to connect to MongoDB',
    MONGO_DB_NOT_INITIALIZED: 'MongoDB database not initialized',
    
    // Messages
    MESSAGES_FETCHING_SUCCESS: 'Messages fetched successfully',
    MESSAGES_FETCHING_ERROR: 'Error occurred while fetching messages',
    
    // Users
    USER_CONNECTED: 'User connected',
    USER_DISCONNECTED: 'User disconnected',
    USER_UID_IS_MISSING: "Can't proceed the request, User ID is missing",
    USER_CREATION_SUCCESS: 'User created successfully',
    USER_CREATION_ERROR: 'Error occurred while creating user',
    USERS_FETCHING_SUCCESS: 'Users fetched successfully',
    USERS_FETCHING_ERROR: 'Error occurred while fetching users',
    USER_UPDATE_SUCCESS: 'User updated successfully',
    USER_UPDATE_ERROR: 'Error occurred while updating user',
    
    // Chats
    CHAT_CREATED: 'Chat created',
    CHAT_DELETED: 'Chat deleted',
    
    // Errors
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    VALIDATION_ERROR: 'Validation Error',
};

const EVENTS = {
    TYPING: 'typing',
    STOPPED_TYPING: 'stoppedTyping',
    ONLINE: 'online',
    OFFLINE: 'offline',
    SENT_MESSAGE: 'messageSent',
    RECEIVED_MESSAGE: 'messageReceived',
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
};

export { MESSAGES, EVENTS };

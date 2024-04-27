enum MESSAGES {
    INTERNAL_SERVER_ERROR = 'Internal Server Error',
    SERVER_LISTENING = '⚡ Server Listening on port',
    HEALTH_CHECK = 'Chat Server Health Check',
    MESSAGES_FETCHING_SUCCESS = 'Messages fetched successfully',
    MESSAGES_FETCHING_ERROR = 'Error fetching messages',
    MONGO_CONNECTION_SUCCESS = 'MongoClient connected successfully',
    MONGO_CONNECTION_FAILED = 'MongoClient failed to connect',
    CLIENT_NOT_INITIALIZED = 'MongoClient is not initialized',
    MONGO_DB_NOT_INITIALIZED = 'MongoDB database is not initialized',
}

export { MESSAGES }
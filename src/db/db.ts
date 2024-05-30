import mongoose from 'mongoose';

import { MESSAGES, CONSTANTS } from '../utils';

const { MONGO_CONNECTION_FAILED, MONGO_CONNECTION_SUCCESS, MONGO_DB_NOT_INITIALIZED } = MESSAGES;

let db: mongoose.Connection;

/**
 * Make a connection with the database
 */
const connect = async () => {
    try {
        const { MONGO_DB_URL, DB_NAME } = CONSTANTS;
        await mongoose.connect(MONGO_DB_URL, { dbName: DB_NAME });
        db = mongoose.connection;
        console.log(`${MONGO_CONNECTION_SUCCESS} \n`);
    } catch (error) {
        console.log(MONGO_CONNECTION_FAILED, error);
        throw error;
    }
}

/**
 * Get the db instance
 * @returns db instance
 */
const getDb = (): mongoose.Connection => {
    if (!db) {
        throw new Error(MONGO_DB_NOT_INITIALIZED);
    }
    return db;
};

export { connect, getDb };

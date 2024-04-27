import { Db, MongoClient } from 'mongodb';

import { MESSAGES } from '../utils';

const { MONGO_CONNECTION_FAILED, MONGO_CONNECTION_SUCCESS, CLIENT_NOT_INITIALIZED, MONGO_DB_NOT_INITIALIZED } = MESSAGES

let client: MongoClient;
let db: Db;

/**
 * Make a connection with the database
 */
const connet = async () => {
    try {
        client = await MongoClient.connect(process.env.MONGO_DB_URL as string);
        db = client.db(process.env.DB_NAME)
        console.log(`${MONGO_CONNECTION_SUCCESS} \n`);
    } catch (error) {
        console.log(MONGO_CONNECTION_FAILED, error);
        throw error;
    }
}

/**
 * Get the db client
 * @returns db client
 */
const getClient = () => {
    if (!client) {
        throw new Error(CLIENT_NOT_INITIALIZED);
    }
    return client;
}

/**
 * Get the db instance
 * @returns db instance
 */
const getDb = (): Db => {
    if (!db) {
        throw new Error(MONGO_DB_NOT_INITIALIZED);
    }
    return db;
};

export { connet, getClient, getDb };

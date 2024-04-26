import { Db, MongoClient } from 'mongodb'

let client: MongoClient;
let db: Db;

/**
 * Make a connection with the database
 */
const connet = async () => {
    try {
        client = await MongoClient.connect(process.env.MONGO_DB_URL);
        db = client.db(process.env.DB_NAME)
        console.log('MongoClient connected successfully');
    } catch (error) {
        console.log('MongoClient failed to connect', error);
        throw error;
    }
}

/**
 * Get the db client
 * @returns db client
 */
const getClient = () => {
    if (!client) {
        throw new Error('MongoClient is not initialized');
    }
    return client;
}

/**
 * Get the db instance
 * @returns db instance
 */
const getDb = (): Db => {
    if (!db) {
        throw new Error('MongoDB database is not initialized');
    }
    return db;
};

export { connet, getClient, getDb };

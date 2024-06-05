import mongoose from 'mongoose';
import { MESSAGES, CONSTANTS } from '../utils';

const { MONGO_CONNECTION_FAILED, MONGO_CONNECTION_SUCCESS } = MESSAGES;

class DatabaseManager {

    /**
     * Make a connection with the database
     */
    public async connect(): Promise<void> {
        try {
            const { MONGO_DB_URL, DB_NAME } = CONSTANTS;
            console.log("Connecting to the database...");
            await mongoose.connect(MONGO_DB_URL, { dbName: DB_NAME });
            console.log(`${MONGO_CONNECTION_SUCCESS} \n`);
        } catch (error) {
            console.error(MONGO_CONNECTION_FAILED, error);
            throw error;
        }
    }
}

export default DatabaseManager;

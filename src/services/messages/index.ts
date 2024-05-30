import { COLLECTIONS } from "../../utils";
import { getDb } from "../../db";

const getMessages = async () => {
    const db = getDb()
    const collection = db.collection<TMessage>(COLLECTIONS.MESSAGES);
    return await collection.find().toArray();
}

export { getMessages }
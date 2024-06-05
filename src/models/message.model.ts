import { Schema, Document, model } from "mongoose";
import { COLLECTIONS } from "@utils";

const MessageSchema = new Schema<TMessage & Document>({
    uid: { type: String, required: true },
    senderUid: { type: String, required: true },
    receiverUid: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, required: true, default: Date.now() },
});

export const MessagesModel = model(COLLECTIONS.MESSAGES, MessageSchema);

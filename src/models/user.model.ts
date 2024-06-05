import { COLLECTIONS } from "@utils";
import { Schema, Document, model } from "mongoose";

const UserSchema = new Schema<TUser & Document>({
    uid: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String, required: false, default: null },
    emailId: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    timestamp: { type: Date, require: true, default: Date.now() },
});

export const UserModel = model(COLLECTIONS.USERS, UserSchema);

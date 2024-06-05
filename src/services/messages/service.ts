import { MessagesModel } from "models";

class MessageService {
    async getMessages(uid?: string): Promise<TMessage[]> {
        const messages = MessagesModel.find({ uid });
        return messages;
    }
}

const instance = new MessageService();
export default instance;

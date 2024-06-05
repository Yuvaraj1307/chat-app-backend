import { UserModel } from "@models";

class UserService {

    async getUsers(): Promise<TUser[]> {
        const users = await UserModel.find()
        return users;
    }

    async createUser(user: TUser): Promise<TUser> {
        const newUser = new UserModel(user);
        return newUser.save()
    }
}

const instance = new UserService();
export default instance;

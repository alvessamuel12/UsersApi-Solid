import { User } from "../entities/User";

export interface IUsersRepository {
    getAll(): User[] | Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}
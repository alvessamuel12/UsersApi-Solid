import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
    private users: User[] = [];
    
    async getAll(): Promise<User[]> {
        return this.users;
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find(u => u.email === email);
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

}
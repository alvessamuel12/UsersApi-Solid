import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) {}

    async execute(): Promise<User[]> {
        return this.usersRepository.getAll();
    }
}
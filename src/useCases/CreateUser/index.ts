import { mailtrapMailProvider, postgresUsersRepository } from "../serviceUseCases";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";


const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository, mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
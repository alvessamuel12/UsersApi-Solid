import { postgresUsersRepository } from "../serviceUseCases";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";

const getUserUseCase = new GetUserUseCase(
    postgresUsersRepository
);

const getUserController = new GetUserController(getUserUseCase);


export { getUserUseCase, getUserController };
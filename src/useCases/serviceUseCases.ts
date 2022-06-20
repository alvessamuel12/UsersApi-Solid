import { MailtrapMailProvider } from "../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../repositories/implementations/PostgresUsersRepository";

const postgresUsersRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

export { postgresUsersRepository, mailtrapMailProvider };
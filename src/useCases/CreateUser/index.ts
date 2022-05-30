import {MailtrapMailProvider} from "../../providers/implementations/MailtrapMailProvider";
import {PostgresUsersRepository} from "../../repositories/implementations/PostgresUsersRepository";
import {CreateUserUseCase} from "./CreateUserUseCase";
import {CreateUserController} from "./CreateUserController";

const mailTrapProvider = new MailtrapMailProvider();
const postgressUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgressUsersRepository,
    mailTrapProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }
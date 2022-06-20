import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    
    // o modificador de acesso private como parâmetro de construtor 
    // injeta a propriedade na classe do TS
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ) {}
    
    async execute(data: ICreateUserRequestDTO) {

        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        console.log(userAlreadyExists);

        if (userAlreadyExists) {
            throw new Error('User already exists!');
        }

        const user = new User(data);
        
        console.log(user);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe ApiSolid',
                email: 'naoresponda@apisolid.com',
            },
            subject: 'Seja bem vindo à ApiSolid!',
            body: '<p>Você já pode efetuar o login em nossa plataforma ;)</p>'
        });
    }
}
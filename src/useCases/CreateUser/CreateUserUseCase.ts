import {IUserRepository} from "../../repositories/IUserRepository";
import {CreateUserRequestDTO} from "./CreateUserDTO";
import {User} from "../../entities/User";
import {IMailProvider} from "../../providers/IMailProvider";

export class CreateUserUseCase{
    constructor(
       private userRepository: IUserRepository,
       private mailProvider: IMailProvider
    ) {}
    async execute(data: CreateUserRequestDTO){
        const userExists = await this.userRepository.findByEmail(data.email);

        if(userExists){
            throw new Error('User already exists!')
        }

        const user = new User(data);

        await this.userRepository.save(user);
        await this.mailProvider.sendMail({
            to:{
                name: data.name,
                email: data.email
            },
            from:{
                name: 'Caio Rocha',
                email: 'caiorocha99@hotmail.com'
            },
            subject: 'Welcome buddy',
            body: "<p> Você já pode se logar em nossa plataforma</p>"
        })
    }
}
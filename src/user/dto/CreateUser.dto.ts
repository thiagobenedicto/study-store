import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'nome não pode ser vazio' })
  name: string;

  @IsEmail(undefined, { message: 'email não pode ser vazio' })
  email: string;

  @MinLength(6, {
    message: 'a senha não pode ser vazia e precisa ter ao menos 6 caracteres',
  })
  password: string;
}

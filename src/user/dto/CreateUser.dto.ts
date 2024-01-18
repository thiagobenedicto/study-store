import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UniqueEmail } from '../validators/unique-email.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @IsEmail(undefined, { message: 'E-mail cannot be empty' })
  @UniqueEmail({ message: 'This e-mail address is already in use' })
  email: string;

  @MinLength(6, {
    message:
      'Password cannot be empty and has to be at least 6 characters long',
  })
  password: string;
}

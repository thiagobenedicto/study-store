import { Get, Body, Controller, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userInput: CreateUserDTO) {
    this.userRepository.save(userInput);
    return userInput;
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}

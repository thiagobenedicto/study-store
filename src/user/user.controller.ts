import {
  Get,
  Body,
  Controller,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { v4 as uuid } from 'uuid';
import { UserEntity } from './user.entity';
import { ListUserDTO } from './dto/ListUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userInput: CreateUserDTO) {
    const userEntity = new UserEntity(); // tá certo esse monte de linha? Daria pra deixar isso fora?
    userEntity.email = userInput.email;
    userEntity.name = userInput.name;
    userEntity.password = userInput.password;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);
    return {
      user: new ListUserDTO(userEntity.id, userEntity.name),
      message: 'Usuário criado com sucesso!',
    };
  }

  @Get()
  async listUsers() {
    const storedUser = await this.userRepository.list();
    const userList = storedUser.map(
      (user) => new ListUserDTO(user.id, user.name),
    );
    return userList;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserData: UpdateUserDTO,
  ) {
    const userEntity = new UserEntity();
    userEntity.email = updateUserData.email;
    userEntity.name = updateUserData.name;
    userEntity.password = updateUserData.password;
    userEntity.id = id;

    const updatedUser = await this.userRepository.update(id, userEntity);

    return { user: updatedUser, message: 'Usuário atualizado!' };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const deletedUser = await this.userRepository.delete(id);

    return {
      user: deletedUser,
      message: 'Usuário removido com sucesso',
    };
  }
}

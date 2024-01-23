import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];
  save(user: UserEntity) {
    this.users.push(user);
    console.log(this.users);
  }
  async list() {
    return this.users;
  }

  async checkUniqueEmail(email: string) {
    const userInput = this.users.find((user) => user.email === email);
    return userInput !== undefined;
  }

  private searchUserById(id: string) {
    const possibleUser = this.users.find((user) => user.id === id);

    if (!possibleUser) {
      throw new Error('Usuário não existe');
    }

    return possibleUser;
  }

  async update(id: string, updateData: Partial<UserEntity>) {
    const user = this.searchUserById(id);

    Object.entries(updateData).map(([key, value]) => {
      if (key === 'id') {
        return; // ignorar request de update se for id
      }
      user[key] = value;
    });
    return user;
  }

  async delete(id: string) {
    const user = this.searchUserById(id);

    this.users = this.users.filter((storedUser) => storedUser.id !== id);

    return user;
  }
}

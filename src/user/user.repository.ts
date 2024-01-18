import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];
  save(user) {
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
}

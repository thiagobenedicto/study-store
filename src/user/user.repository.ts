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
}

import { Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller()
export class UsersController {
  constructor(public readonly usersService: UsersService) {}

  @Get('/users')
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}

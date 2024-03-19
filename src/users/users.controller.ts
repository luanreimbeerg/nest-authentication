import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from '../entities/user.entity';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller()
export class UsersController {
  constructor(public readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get('/user')
  async getUserByName(@Query('name') name: string): Promise<User> {
    return this.usersService.findOneByUsername(name);
  }

  @UseGuards(AuthGuard)
  @Get('/users')
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneByUsername(username: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: { name: username },
    });

    if (!user) {
      throw new NotFoundException(
        `Usuário com nome '${username}' não encontrado.`,
      );
    }

    return user;
  }
  async findOneByUserEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { email: email } });

    if (!user) {
      throw new NotFoundException(
        `Usuário com e-mail '${email}' não encontrado.`,
      );
    }

    return user;
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
}

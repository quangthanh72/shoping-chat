import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserInput } from './dto/create-user.input';
import * as bcrypt from 'bcrypt';
import { User } from './entity/users.entity';
@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserInput: CreateUserInput) {
    const user = new User({
      ...createUserInput,
      password: await bcrypt.hash(createUserInput.password, 10),
    });

    return this.usersRepository.create(user);
  }
}

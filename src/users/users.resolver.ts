import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './entity/users.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.create(createUserInput);
  }
}

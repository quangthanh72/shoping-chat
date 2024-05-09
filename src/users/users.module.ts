import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DatabaseModule } from 'src/common/database/database.module';
import { UsersRepository } from './users.repository';
import { User } from './entity/users.entity';

@Module({
  imports: [DatabaseModule.forFeature([User])],
  providers: [UsersService, UsersResolver, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}

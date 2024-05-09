import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractEntity } from '../../common/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class User extends AbstractEntity<User> {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  address: string;
}

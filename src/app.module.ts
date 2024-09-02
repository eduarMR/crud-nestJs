import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'193.203.166.193',
      port:3306,
      username:'u247098385_cruduser',
      password: 'Cruduserone12',
      database: 'u247098385_crud',
      entities: [
        UserEntity
      ],
      synchronize: true,
      autoLoadEntities: true
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

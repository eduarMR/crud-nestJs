import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'tu-host',
      port:3306,
      username:'tu-usuario',
      password: 'tu-contraseña',
      database: 'tu-bd',
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

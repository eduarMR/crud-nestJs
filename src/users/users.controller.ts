import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.deto';
import { UserEntity } from './entity/user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ){}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<{success:string; user:UserEntity}>{
        const user = await this.userService.createUser(createUserDto);
        return{
            success:"Se creo el usuario correctamente",
            user:user
        }
    }

    @Get('buscar')
    async findAll(): Promise<UserEntity[]>{
        return this.userService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id', ParseIntPipe) iduser: number){
        return this.userService.findById(iduser);
    }

    @Delete('/:id')
    async deleteUser(@Param('id', ParseIntPipe) iduser:number): Promise<{success:string; user:UserEntity}>{
        const user = await this.userService.deleteUser(iduser)
        return {
            success:"el usuario elimino correctamente",
            user:user
        }
    }

    @Patch('/:id')
    async updateUser(@Param('id', ParseIntPipe) iduser:number, @Body() updateUserDto:UpdateUserDto): Promise<{success: string; user:UserEntity}>{
        const user = await this.userService.updateUser(iduser, updateUserDto);

        return {
            success:"el usuario se actualizo correctamente",
            user:user
        }
    }
}

import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.deto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const{email} = createUserDto;

        const existEmail = await this.userRepository.findOne({where:{email:createUserDto.email}});

        if(existEmail){
            throw new ConflictException("Ya existe un usuario con ese correo.")
        }

        const User = this.userRepository.create(createUserDto);
        return this.userRepository.save(User);
    }


    async findAll(): Promise<UserEntity[]>{
        return this.userRepository.find();
    }


    async findById(iduser:number): Promise<UserEntity>{
        const User = await this.userRepository.findOne({where:{iduser}});

        if(!User){
            throw new NotFoundException("No se encontro al usuario")
        }
        
        return this.userRepository.findOne({where:{iduser}})
    }

    async deleteUser(iduser:number): Promise<UserEntity>{
        const User = await this.userRepository.findOne({where:{iduser}});
        if(!User){
            throw new NotFoundException("No se encontro al usuario")
        }
        this.userRepository.delete(iduser)

        return User;
    }

    async updateUser(iduser:number, updateUserDto:UpdateUserDto): Promise<UserEntity>{
        const User = await this.userRepository.findOne({where:{iduser}});

        if(!User){
            throw new NotFoundException("No se encontro al usuario")
        }
        
        await this.userRepository.update(iduser, updateUserDto);

        const UpdateUser = await this.userRepository.findOne({where:{iduser}})
        
        return UpdateUser;
    }
}

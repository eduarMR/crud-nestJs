import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsEmail()
    email:string;

    @IsString()
    password:string;

    @IsString()
    @MinLength(1)
    first_name:string;

    @IsString()
    @MinLength(1)
    last_name:string;
}
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    username?: string;

    @IsEmail()
    @IsOptional()
    email?:string;

    @IsString()
    @IsOptional()
    password?:string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    first_name?:string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    last_name?:string;
}
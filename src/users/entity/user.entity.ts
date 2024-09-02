import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    iduser: number;

    @Column()
    username: string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    first_name:string;

    @Column()
    last_name:string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at:Date;
}
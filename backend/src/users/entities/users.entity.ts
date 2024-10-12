import { Transform, TransformFnParams } from 'class-transformer'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'tb_users' })
export class Users {
    @PrimaryGeneratedColumn()
    id: string

    @IsNotEmpty()
    @Column({ nullable: false, length: 255 })
    name: string

    @IsEmail()
    @IsNotEmpty()
    @Column({ nullable: false, length: 255 })
    email: string

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @MinLength(8)
    @IsNotEmpty()
    @Column({ nullable: false, length: 1000 })
    password: string
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from '../entities'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({ relations: { tasks: true } })
    }

    // tem alguma coisa de errado com esse método, porque ele nao retorna a senha de fato
    async findByUser(user: string): Promise<User | undefined> {
        return await this.userRepository.findOne({
            where: { email: user },
        })
    }

    // async findById(id: string): Promise<User> {
    //     let user = await this.userRepository.findOne({
    //         where: { id },
    //     })

    //     if (!user) throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)
    //     return user
    // }

    async create(user: User): Promise<User> {
        const findUser = await this.findByUser(user.email)

        if (!findUser) {
            return await this.userRepository.save(user)
        }

        throw new HttpException('O Usuário ja existe!', HttpStatus.BAD_REQUEST)
    }

    async update(user: User): Promise<User> {
        // aqui estava findByUser
        const existingUser: User = await this.findByUser(user.id)

        if (!existingUser) throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)
        if (existingUser.id !== user.id)
            throw new HttpException('Email do Usuário já foi Cadastrado, tente outro email.', HttpStatus.BAD_REQUEST)

        return await this.userRepository.save(user)
    }
}

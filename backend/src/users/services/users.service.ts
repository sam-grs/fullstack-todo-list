import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Users } from '../entities'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>
    ) {}

    async findAll(): Promise<Users[]> {
        return await this.userRepository.find()
    }

    // tem alguma coisa de errado com esse método, porque ele nao retorna a senha de fato
    async findByUser(user: string): Promise<Users | undefined> {
        return await this.userRepository.findOne({
            where: { email: user },
        })
    }

    async findById(id: string): Promise<Users> {
        let user = await this.userRepository.findOne({
            where: { id },
        })

        if (!user) throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)
        return user
    }

    async create(user: Users): Promise<Users> {
        const findUser = await this.findByUser(user.email)

        if (!findUser) {
            return await this.userRepository.save(user)
        }

        throw new HttpException('O Usuário ja existe!', HttpStatus.BAD_REQUEST)
    }

    async update(user: Users): Promise<Users> {
        const existingUser: Users = await this.findById(user.id)

        if (!existingUser) throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)

        if (existingUser.id !== user.id)
            throw new HttpException('Email do Usuário já foi Cadastrado, tente outro email.', HttpStatus.BAD_REQUEST)

        return await this.userRepository.save(user)
    }

    // async delete(id: string): Promise<DeleteResult> {
    //     return await this.userRepository.delete(id)
    // }
}

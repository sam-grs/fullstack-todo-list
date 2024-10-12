import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, DeleteResult } from 'typeorm'

import { Users } from '../entities'
import { Bcrypt } from '../auth/bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        private bcrypt: Bcrypt
    ) {}

    async findAll(): Promise<Users[]> {
        return await this.userRepository.find()
    }

    async findByUser(user: string): Promise<Users | undefined> {
        return await this.userRepository.findOne({
            where: {
                email: user,
            },
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
            user.password = await this.bcrypt.encryptPassword(user.password)
            return await this.userRepository.save(user)
        }

        throw new HttpException('O Usuário ja existe!', HttpStatus.BAD_REQUEST)
    }

    async update(user: Users): Promise<Users> {
        const id: Users = await this.findById(user.id)
        const findUser: Users = await this.findByUser(user.email)

        if (!id) throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)

        if (findUser.id !== user.id && findUser)
            throw new HttpException('Email do Usuário já foi Cadastrado, tente outro email.', HttpStatus.BAD_REQUEST)

        user.password = await this.bcrypt.encryptPassword(user.password)
        return await this.userRepository.save(user)
    }

    async delete(id: string): Promise<DeleteResult> {
        return await this.userRepository.delete(id)
    }
}

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, DeleteResult } from 'typeorm'

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

    async create(task: Users): Promise<Users> {
        return await this.userRepository.save(task)
    }

    async update(task: Users): Promise<Users> {
        return await this.userRepository.save(task)
    }

    async delete(id: string): Promise<DeleteResult> {
        return await this.userRepository.delete(id)
    }
}

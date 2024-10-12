import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, DeleteResult } from 'typeorm'

import { Tasks } from '../entities'

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Tasks)
        private taskRepository: Repository<Tasks>
    ) {}

    async findAll(): Promise<Tasks[]> {
        return await this.taskRepository.find()
    }

    async create(task: Tasks): Promise<Tasks> {
        return await this.taskRepository.save(task)
    }

    async update(task: Tasks): Promise<Tasks> {
        return await this.taskRepository.save(task)
    }

    async delete(id: string): Promise<DeleteResult> {
        return await this.taskRepository.delete(id)
    }
}

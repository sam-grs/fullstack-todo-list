import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
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
        return await this.taskRepository.find({ relations: { user: true } })
    }

    async findId(id: string): Promise<Tasks> {
        const task = await this.taskRepository.findOne({ where: { id }, relations: { user: true } })

        if (!task) throw new HttpException('Tarefa não encontrada!', HttpStatus.NOT_FOUND)
        return task
    }

    async create(task: Tasks): Promise<Tasks> {
        return await this.taskRepository.save(task)
    }

    async update(task: Tasks): Promise<Tasks> {
        const findTask = await this.taskRepository.save(task)

        if (!findTask) throw new HttpException('Tarefa não encontrada!', HttpStatus.NOT_FOUND)
        return findTask
    }

    async delete(id: string): Promise<DeleteResult> {
        const findId = await this.taskRepository.delete(id)

        if (!findId) throw new HttpException('Tarefa não encontrada!', HttpStatus.NOT_FOUND)
        return findId
    }
}

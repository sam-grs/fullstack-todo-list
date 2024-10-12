import { Get, HttpStatus, HttpCode, Post, Body, Delete, Param, ParseIntPipe } from '@nestjs/common'

import { TaskService } from '../services'
import { Tasks } from '../entities'

export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tasks[]> {
        return this.taskService.findAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() task: Tasks): Promise<Tasks> {
        return this.taskService.create(task)
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    update(@Body() task: Tasks): Promise<Tasks> {
        return this.taskService.update(task)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: string) {
        return this.taskService.delete(id)
    }
}

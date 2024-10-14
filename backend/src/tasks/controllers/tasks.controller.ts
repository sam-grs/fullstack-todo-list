import {
    Get,
    HttpStatus,
    HttpCode,
    Post,
    Body,
    Delete,
    Param,
    ParseIntPipe,
    Controller,
    Put,
    UseGuards,
} from '@nestjs/common'

import { TaskService } from '../services'
import { Tasks } from '../entities'
import { JwtAuthGuard } from 'src/users/auth/guard'

@UseGuards(JwtAuthGuard)
@Controller('/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tasks[]> {
        return this.taskService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findId(@Param('id', ParseIntPipe) id: string) {
        return this.taskService.findId(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() task: Tasks): Promise<Tasks> {
        return this.taskService.create(task)
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id', ParseIntPipe) id: string, @Body() task: Tasks) {
        task.id = id
        return this.taskService.update(task)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: string) {
        return this.taskService.delete(id)
    }
}

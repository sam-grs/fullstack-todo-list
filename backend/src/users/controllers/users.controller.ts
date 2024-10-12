import { Get, HttpStatus, HttpCode, Post, Body, Delete, Param, ParseIntPipe, Controller, Put } from '@nestjs/common'

import { UserService } from '../services'
import { Users } from '../entities'

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Users[]> {
        return this.userService.findAll()
    }

    @Post('/register')
    @HttpCode(HttpStatus.CREATED)
    create(@Body() user: Users): Promise<Users> {
        return this.userService.create(user)
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id', ParseIntPipe) id: string, @Body() user: Users) {
        user.id = id
        return this.userService.update(user)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: string) {
        return this.userService.delete(id)
    }
}

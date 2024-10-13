import { Get, HttpStatus, HttpCode, Post, Body, Param, ParseIntPipe, Controller, Put, UseGuards } from '@nestjs/common'

import { UserService } from '../services'
import { User } from '../entities'
import { JwtAuthGuard } from '../auth/guard'

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Post('/register')
    @HttpCode(HttpStatus.CREATED)
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id', ParseIntPipe) id: string, @Body() user: User) {
        user.id = id
        return this.userService.update(user)
    }
}

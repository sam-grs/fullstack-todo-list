import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

import { LoginUser } from '../entities/login-user.entity'
import { AuthService } from '../services/auth.service'

@Controller('/users')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    async login(@Body() user: LoginUser): Promise<any> {
        return this.authService.login(user)
    }
}

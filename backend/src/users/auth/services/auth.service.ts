import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserService } from '../../services'
import { Bcrypt } from '../bcrypt'
import { LoginUser } from '../entities/login-user.entity'

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByUser(email)
        if (!user) throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)
        const matchPassword = await this.bcrypt.comparePassword(password, user.password)

        if (user && matchPassword) {
            const { password, ...response } = user
            return response
        }
        return null
    }

    async login(userLogin: LoginUser) {
        const payload = { sub: userLogin.email }
        const findUser = await this.userService.findByUser(userLogin.email)

        return {
            id: findUser.id,
            name: findUser.name,
            user: userLogin.email,
            password: '',
            token: `Bearer ${this.jwtService.sign(payload)}`,
        }
    }
}

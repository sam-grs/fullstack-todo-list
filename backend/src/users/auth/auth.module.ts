import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { UserModule } from '../users.module'
import { Bcrypt } from './bcrypt'
import { AuthService } from './services'
import { AuthController } from './controllers'
import { JwtStrategy, LocalStrategy } from './strategy'

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            // signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt],
})
export class AuthModule {}

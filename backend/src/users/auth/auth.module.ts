import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { UserModule } from '../user.module'
import { AuthService } from './services'
import { AuthController } from './controllers'
import { JwtStrategy, LocalStrategy } from './strategy'
import { jwtConstants } from './constants'

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            // secret: process.env.JWT_SECRET,
            secret: jwtConstants.secret,
            // signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthService, JwtStrategy, LocalStrategy],
    controllers: [AuthController],
    exports: [],
})
export class AuthModule {}

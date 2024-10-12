import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Users } from './entities'
import { UserService } from './services'
import { UserController } from './controllers'
import { Bcrypt } from './auth/bcrypt'

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [UserService, Bcrypt],
    controllers: [UserController],
    exports: [TypeOrmModule],
})
export class UserModule {}

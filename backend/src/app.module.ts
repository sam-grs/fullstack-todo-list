import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

import { Tasks, TaskModule } from './tasks'
import { Users, UserModule, LoginUser, AuthModule } from './users'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'gross',
            database: 'db_to_do_list',
            entities: [Tasks, Users],
            synchronize: true,
        }),
        TaskModule,
        AuthModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

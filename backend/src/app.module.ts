import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Tasks, TaskModule } from './tasks'
import { Users, UserModule, LoginUser, AuthModule } from './users'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'gross',
            database: 'db_to_do_list',
            entities: [Tasks, Users, LoginUser],
            synchronize: true,
        }),
        TaskModule,
        UserModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

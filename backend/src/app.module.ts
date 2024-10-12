import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Tasks } from './tasks/entities'
import { TaskModule } from './tasks/tasks.module'
import { Users } from './users/entities'
import { UserModule } from './users/users.module'

@Module({
    imports: [
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
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

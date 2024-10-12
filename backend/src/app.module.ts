import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Tasks } from './tasks/entities'
import { TaskModule } from './tasks/tasks.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'gross',
            database: 'db_to-do_list',
            entities: [Tasks],
            synchronize: true,
        }),
        TaskModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

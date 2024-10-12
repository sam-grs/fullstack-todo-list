import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Tasks } from './entities'
import { TaskService } from './services'
import { TaskController } from './controllers'

@Module({
    imports: [TypeOrmModule.forFeature([Tasks])],
    providers: [TaskService],
    controllers: [TaskController],
    exports: [TypeOrmModule],
})
export class TaskModule {}

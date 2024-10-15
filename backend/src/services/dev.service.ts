import { Injectable } from '@nestjs/common'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

import { Tasks } from 'src/tasks'
import { User } from 'src/users'

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'gross',
            database: 'db_to_do_list',
            entities: [Tasks, User],
            synchronize: true,
        }
    }
}

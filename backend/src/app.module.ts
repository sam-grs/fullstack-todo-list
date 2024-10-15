import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

import { TaskModule } from './tasks'
import { UserModule, AuthModule } from './users'
import { ProdService } from './services/prod.service'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            useClass: ProdService,
            imports: [ConfigModule],
        }),
        TaskModule,
        AuthModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

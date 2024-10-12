import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@Injectable()
export class Bcrypt {
    async encryptPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10)
    }

    async comparePassword(passwordEntered: string, passwordStored: string): Promise<boolean> {
        return await bcrypt.compare(passwordEntered, passwordStored)
    }
}

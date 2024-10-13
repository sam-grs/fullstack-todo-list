import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { jwtConstants } from '../constants'
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            // secretOrKey: process.env.JWT_SECRET,
            secretOrKey: jwtConstants.secret,
        })
    }

    // troquei aqui o payload
    async validate(payload: any) {
        // return payload
        return { userId: payload.sub }
    }
}

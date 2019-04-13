import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from '../models/userDto';
import { UserCreds } from '../models/userCreds';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/shared/models/jwt.payload.model';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, @InjectRepository(User)
    private readonly userRepository: Repository<User>) { }

   async save(user: UserDto) {
        const userCandidate: Promise<User> = this.userRepository.findOne(user);
        return await userCandidate.then(result => {
            if (result) {
                return undefined;
            } else {
                return this.userRepository.save(user);
            }
        },
        );
    }

    async  signIn(userCreds: UserCreds) {
        const userCandidate: Promise<User> = this.userRepository.findOne(userCreds);
        return await userCandidate.then(result => {
            if (result) {
                const userData = {
                    name: result.name,
                    id: result.id,
                };
                const acsessToken = this.jwtService.sign(userData, { expiresIn: '1h' });
                return { acsessToken };
            } else {
                return undefined;
            }
        });
    }

    async validateUser(payload: JwtPayload): Promise<any> {

        //   return {};
        }

}

import { Controller, Post, Body, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserDto } from '../models/userDto';
import { UserCreds } from '../models/userCreds';
import { UserToken } from '../models/userToken';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {

    constructor(private readonly UserService: AuthService) { }

    @Post('register')
    // @UseGuards(AuthGuard())
    async save(@Body() user: UserDto): Promise<UserDto> {
        const newUser = await this.UserService.save(user);
        if (newUser) {
            return newUser;
        } else {
            throw new HttpException('User already exist', HttpStatus.CONFLICT);
        }
    }

    @Post('signIn')
    @ApiBearerAuth()
    async signIn(@Body() userCreds: UserCreds): Promise<UserToken> {
        const token = await this.UserService.signIn(userCreds);
        if (token) {
            return token;
        } else {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }

}

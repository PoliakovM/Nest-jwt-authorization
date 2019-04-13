import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './shared/jwt.strategy';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}

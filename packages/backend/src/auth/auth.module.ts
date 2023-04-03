import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../models/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailerService } from './mailer.service';

@Module({
  imports: [UsersModule, ConfigModule],
  providers: [AuthService, MailerService],
  controllers: [AuthController],
  exports: [MailerService],
})
export class AuthModule {}

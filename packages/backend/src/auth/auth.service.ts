import { Injectable } from '@nestjs/common';
import { UserService } from '../models/users/users.service';
import { MailerService } from './mailer.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService //private mailer: MailerService
  ) {}

  async beginLogin(mail: string): Promise<any> {
    return 'a';
  }
}

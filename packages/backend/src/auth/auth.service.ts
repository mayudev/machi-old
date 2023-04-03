import { Injectable } from '@nestjs/common';
import { UserService } from '../models/users/users.service';
import { MailerService } from './mailer.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private mailerService: MailerService
  ) {}

  sendMail(mail: string, code: string): Promise<any> {
    return this.mailerService.transporter.sendMail({
      from: 'machi app login <login@machi.gay>',
      to: mail,
      subject: 'machi app login request',
      text: `Hello,\nyour login code is ${code}.\nThis code will expire in 10 minutes.\nIf you did not make this request, please ignore this email.`,
    });
  }

  async beginLogin(mail: string): Promise<any> {
    this.sendMail(mail, '123456');
  }
}

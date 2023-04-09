import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../models/users/users.service';
import { generateOTP } from '../lib/otp';
import { MailerService } from './mailer.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

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
    this.usersService.findByEmail(mail);

    const otp = generateOTP(6);
    this.logger.log(`Generated OTP ${otp}`);

    this.sendMail(mail, otp);
  }
}

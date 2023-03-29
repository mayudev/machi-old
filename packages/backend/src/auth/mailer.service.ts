import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class MailerService implements OnModuleInit {
  transporter: Transporter;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    this.transporter = createTransport({
      host: this.configService.get<string>('MAILER_HOST'),
      port: this.configService.get<number>('MAILER_PORT'),
      auth: {
        user: this.configService.get<string>('MAILER_USER'),
        pass: this.configService.get<string>('MAILER_PASS'),
      },
    });
  }
}

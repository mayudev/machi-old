import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BeginLoginDto } from './dto/begin-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('begin')
  beginLogin(@Body() beginLoginDto: BeginLoginDto) {
    return this.authService.beginLogin(beginLoginDto.email);
  }
}

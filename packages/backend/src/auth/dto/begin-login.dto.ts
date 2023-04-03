import { IsEmail } from 'class-validator';

export class BeginLoginDto {
  @IsEmail()
  email: string;
}

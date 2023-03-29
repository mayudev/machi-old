import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('POSTGRES_HOST', 'localhost'),
      port: this.configService.get('POSTGRES_PORT', 5432),
      username: this.configService.get('POSTGRES_USER', 'postgres'),
      password: this.configService.get('POSTGRES_PASSWORD', 'postgres'),
      database: this.configService.get('POSTGRES_DB', 'machi'),
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}

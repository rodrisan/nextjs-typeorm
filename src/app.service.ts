import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    private _configService: ConfigService,
    @Inject('TASKS') private tasks: any[],
  ) {}

  getHello(): string {
    const apiKey = this._configService.get<string>('API_KEY');
    const dbName = this._configService.get<string>('DATABASE_NAME');
    console.log(this.tasks);
    return `Hello World! ${apiKey} ${dbName}`;
  }
}

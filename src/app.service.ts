import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './common/config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    // private _configService: ConfigService, // Replaced by ConfigType
    @Inject(config.KEY) private _configService: ConfigType<typeof config>,
    @Inject('TASKS') private tasks: any[],
  ) {}

  getHello(): string {
    // const apiKey = this._configService.get<string>('API_KEY');
    // const dbName = this._configService.get<string>('DATABASE_NAME');
    const apiKey = this._configService.apiKey;
    const dbName = this._configService.database.name;
    console.log(this.tasks);
    return `Hello World! ${apiKey} ${dbName}`;
  }
}

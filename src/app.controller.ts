import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new-method')
  newMethod(): string {
    return 'The new method';
  }

  @Get('/another-method/')
  anocherMethod(): string {
    return 'The another method using slashes';
  }
}

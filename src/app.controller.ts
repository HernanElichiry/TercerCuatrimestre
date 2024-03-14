import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//import { iWoman } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/women')
  getHello(): string {
    return this.appService.getWoman();
  }
}

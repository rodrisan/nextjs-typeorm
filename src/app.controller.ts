import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('products')
  getProducts() {
    return `All the Products`;
  }

  // Working with params

  // @Get('products/:id')
  // getProduct(@Param() params: any) {
  //   return `Product ${params.id}`;
  // }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `Product ${id}`;
  }

  // Working with multiple params
  @Get('categories/:catId/products/:prodId')
  getCategory(@Param('catId') catId: string, @Param('prodId') prodId: string) {
    return `product: ${prodId}, cat: ${catId}`;
  }
}

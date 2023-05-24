import { Controller, Get, Param, Query } from '@nestjs/common';
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

  // Working with params

  // Working with multiple params
  // @Get('categories/:catId/products/:prodId')
  // getCategory(@Param('catId') catId: string, @Param('prodId') prodId: string) {
  //   return `product: ${prodId}, cat: ${catId}`;
  // }

  // @Get('products/:id')
  // getProduct(@Param() params: any) {
  //   return `Product ${params.id}`;
  // }

  // Routes colission.
  // In order to avoid them, it is required to set the
  // non-dynamic routes first.

  // @Get('products/filter')
  // getProductFilter() {
  //   return `The filter`;
  // }

  // @Get('products/:id')
  // getProduct(@Param('id') id: string) {
  //   return `Product ${id}`;
  // }

  // Query params

  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `products: limit=> ${limit}, offset=>${offset}`;
  // }

  // @Get('products')
  // getProducts(
  //   @Query('limit') limit = 100,
  //   @Query('offset') offset = 0,
  //   @Query('brand') brand: string,
  // ) {
  //   return `products: limit=>${limit}, offset=>${offset}, brand=>${brand}`;
  // }
}

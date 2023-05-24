import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  filter() {
    return { message: `The filter` };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return { message: `Product ${id}` };
  }

  @Get()
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit=>${limit}, offset=>${offset}, brand=>${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return { message: 'creation action', payload };
  }
}

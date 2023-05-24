import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':catId/products/:prodId')
  get(@Param('catId') catId: string, @Param('prodId') prodId: string) {
    return { message: `product: ${prodId}, cat: ${catId}` };
  }

  @Post()
  create(@Body() payload: any) {
    return { message: 'creation action', payload };
  }
}

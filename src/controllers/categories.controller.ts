import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':catId/products/:prodId')
  get(@Param('catId') catId: string, @Param('prodId') prodId: string) {
    return `product: ${prodId}, cat: ${catId}`;
  }
}

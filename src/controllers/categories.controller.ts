import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { message: 'update action', id, payload };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { message: 'delete action', id };
  }
}

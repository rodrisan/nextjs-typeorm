import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  Res,
  ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';

import { ProductService } from 'src/services/product.service';

@Controller('products')
export class ProductsController {
  constructor(private _productService: ProductService) {}

  @Get('filter')
  filter() {
    return { message: `The filter` };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id') id: string) {
    // response.status(200).send({ message: `Product ${id}` });
    return this._productService.findOne(+id);
  }

  @Get()
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this._productService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return this._productService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this._productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return { message: 'delete action', id };
  }
}

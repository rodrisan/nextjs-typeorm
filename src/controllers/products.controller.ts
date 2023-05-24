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
} from '@nestjs/common';

import { ProductService } from 'src/services/product.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private _productService: ProductService) {}

  @Get('filter')
  filter() {
    return { message: `The filter` };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    // response.status(200).send({ message: `Product ${id}` });
    return this._productService.findOne(+id);
  }

  @Get()
  @ApiOperation({ summary: 'List of products' })
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this._productService.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this._productService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this._productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this._productService.remove(+id);
  }
}

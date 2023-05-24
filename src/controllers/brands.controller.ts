import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAll() {
    return 'Get all';
  }

  @Get()
  getOne(@Param('id') id: number) {
    return `Get one ${id}`;
  }
}

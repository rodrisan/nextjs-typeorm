import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAll() {
    return 'Get all';
  }

  @Get()
  getOne(@Param('id') id: number) {
    return `Get one ${id}`;
  }
}

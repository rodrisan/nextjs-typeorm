import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAll() {
    return 'Get all';
  }

  @Get()
  getOne(@Param('id') id: number) {
    return `Get one ${id}`;
  }
}

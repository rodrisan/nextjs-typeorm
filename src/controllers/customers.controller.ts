import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAll() {
    return { message: 'Get all' };
  }

  @Get()
  getOne(@Param('id') id: number) {
    return { message: `Get one ${id}` };
  }

  @Post()
  create(@Body() payload: any) {
    return { message: 'creation action', payload };
  }
}

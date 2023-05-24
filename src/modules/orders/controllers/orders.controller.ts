import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { message: 'update action', id, payload };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { message: 'delete action', id };
  }
}

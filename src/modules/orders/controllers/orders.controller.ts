import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

ApiTags('Orders');
@Controller('orders')
export class OrdersController {
  @ApiOperation({ summary: 'Get all Orders' })
  @Get()
  getAll() {
    return { message: 'Get all' };
  }

  @ApiOperation({ summary: 'Get a Order by ID' })
  @Get()
  getOne(@Param('id') id: number) {
    return { message: `Get one ${id}` };
  }

  @ApiOperation({ summary: 'Create a new Order' })
  @Post()
  create(@Body() payload: any) {
    return { message: 'creation action', payload };
  }

  @ApiOperation({ summary: 'Update an existing Order' })
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { message: 'update action', id, payload };
  }

  @ApiOperation({ summary: 'Delete an existing Order' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return { message: 'delete action', id };
  }
}

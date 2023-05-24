import { Module } from '@nestjs/common';

import { OrdersController } from './controllers/orders.controller';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [],
})
export class OrdersModule {}

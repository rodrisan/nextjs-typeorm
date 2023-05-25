import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { OrdersModule } from '../orders/orders.module';
import { todosApi } from 'src/common/constants';
import { lastValueFrom } from 'rxjs';

const API_KEY = '123456789';
const API_KEY_PROD = 'PROD123456789';

@Module({
  imports: [UsersModule, ProductsModule, OrdersModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'todosApi',
      useValue: todosApi,
    },
    {
      provide: 'TASKS',
      // useFactory: is async and uses DI.
      // Calling for an API is not recommended!
      // Use it for DB connections.
      useFactory: async (http: HttpService) => {
        const request = http.get(`${todosApi}`);
        // const tasks = await (await firstValueFrom(request)).data; // This works too!.
        // const tasks = await lastValueFrom(request); // This works too!.
        const tasks = Promise.resolve(lastValueFrom(request));
        return tasks;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}

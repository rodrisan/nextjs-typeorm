import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './../../modules/products/controllers/products.controller';
import { CategoriesController } from './../../modules/products/controllers/categories.controller';
import { OrdersController } from './../../modules/orders/controllers/orders.controller';
import { CustomersController } from './../../modules/users/controllers/customers.controller';
import { BrandsController } from './../../modules/products/controllers/brands.controller';
import { ProductService } from './../../modules/products/services/product.service';
import { BrandsService } from './../../modules/products/services/brands.service';
import { CategoriesService } from './../../modules/products/services/categories.service';
import { CustomersService } from './../../modules/users/services/customers.service';
import { UsersController } from './../../modules/users/controllers/users.controller';
import { UsersService } from './../../modules/users/services/users.service';
import { ProductsModule } from './../../modules/products/products.module';
import { UsersModule } from './../../modules/users/users.module';
import { OrdersModule } from './../../modules/orders/orders.module';

@Module({
  imports: [ProductsModule, UsersModule, OrdersModule],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    CustomersController,
    BrandsController,
    UsersController,
  ],
  providers: [
    AppService,
    ProductService,
    BrandsService,
    CategoriesService,
    CustomersService,
    UsersService,
  ],
})
export class AppModule {}

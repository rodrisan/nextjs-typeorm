import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  private counter = 0;
  private products: Product[] = [
    {
      description: 'Description Product 1',
      id: 1,
      image: '',
      name: 'Product 1',
      price: 2323,
      stock: 123,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: any) {
    this.counter += 1;
    const newProduct = {
      id: this.counter,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    // const productIndex = this.products.findIndex((item) => item.id === id);
    // if (productIndex === -1) throw new Error('Not found');
    // this.products[productIndex] = {
    //   id: id,
    //   ...payload,
    // };
    // return {
    //   data: this.products[productIndex],
    //   message: 'Product updated succesfully',
    // };

    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArrayContains, In, Repository } from 'typeorm';

import { Product } from 'src/modules/products/entities/product.entity';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/modules/products/dtos/product.dto';
import { RootEntity } from './../../../common/root-entity';
import { BrandsService } from './brands.service';
import { Category } from '../entities/category.entity';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) // In order to use MySQL, pass the second param 'mysqlDB'.
    private _productRepository: Repository<Product>,
    @InjectRepository(Category)
    private _categoryRepository: Repository<Category>,
    @InjectRepository(Brand)
    private _brandRepository: Repository<Brand>,
  ) {}

  findAll() {
    return this._productRepository.find({ relations: ['brand', 'categories'] });
  }

  async findOne(id: RootEntity['id']) {
    const product = await this._productRepository.findOne({
      where: { id },
      relations: ['brand', 'categories'],
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async create(data: CreateProductDto) {
    // Using Active Record.
    // const newProduct = new Product();
    // newProduct.description = payload.description;
    // newProduct.image = payload.image;
    // newProduct.name = payload.name;
    // newProduct.price = payload.price;
    // newProduct.stock = payload.stock;

    // Using Repository Patter.
    const newProduct = this._productRepository.create(data);
    if (data.brand_id) {
      const brand = await this._brandRepository.findOneBy({
        id: data.brand_id,
      });
      newProduct.brand = brand;
    }
    if (data.categories_ids) {
      const categories = await this._categoryRepository.findBy({
        id: In(data.categories_ids),
      });
      newProduct.categories = categories;
    }
    return this._productRepository.save(newProduct);
  }

  async update(id: RootEntity['id'], changes: UpdateProductDto) {
    const product = await this._productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product id #${id} does not exists`);
    }
    if (changes.brand_id) {
      const brand = await this._brandRepository.findOneBy({
        id: changes.brand_id,
      });
      product.brand = brand;
    }
    if (changes.categories_ids) {
      const categories = await this._categoryRepository.findBy({
        id: In(changes.categories_ids),
      });
      product.categories = categories;
    }
    this._productRepository.merge(product, changes);
    return this._productRepository.save(product);
  }

  async remove(id: RootEntity['id']) {
    const product = await this._productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product id #${id} does not exists`);
    }
    return this._productRepository.delete(id);
  }
}

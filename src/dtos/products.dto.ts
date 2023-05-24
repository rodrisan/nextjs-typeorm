import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

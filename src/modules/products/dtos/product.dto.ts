import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  IsUrl,
  Min,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { RootEntity } from './../../../common/root-entity';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString({ message: 'We need a valid name' })
  @ApiProperty({ description: `Product's name` })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  readonly stock: number;

  @IsNotEmpty()
  @IsUrl({ require_protocol: true })
  @ApiProperty()
  readonly image: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  readonly brand_id: RootEntity['id'];

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  readonly categories_ids: string[];
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FilterProductsDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}

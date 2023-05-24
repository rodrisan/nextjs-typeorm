import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString({ message: 'We need a valid name' })
  @ApiProperty({ description: `Product's name` })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @IsNotEmpty()
  @IsUrl({ require_protocol: true })
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

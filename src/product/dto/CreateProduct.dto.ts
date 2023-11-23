import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductAtributesDTO } from './ProductAtributes.dto';
import { ProductImagesDTO } from './ProductImages.dto';
import { Type } from 'class-transformer';

export class createProductDTO {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(1)
  @Max(99)
  value: number;

  @IsNumber()
  @Min(0)
  availableQuantity: number;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => ProductAtributesDTO)
  attributes: ProductAtributesDTO[];
  images: ProductImagesDTO[];

  @IsNotEmpty()
  category: string;
  creationDate: string;
  updateDate: string;
}

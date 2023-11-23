import { IsNotEmpty } from 'class-validator';

export class ProductAtributesDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}

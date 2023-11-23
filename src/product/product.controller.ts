import { Controller, Get, Body, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}
  @Post()
  async createProduct(@Body() productInput: any) {
    this.productRepository.save(productInput);
    return productInput;
  }

  @Get()
  async listProducts() {
    return this.productRepository.list();
  }
}

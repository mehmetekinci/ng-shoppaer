import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  name: string = '';
  price: string = '';
  url: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onCreateProduct() {
    this.productService.createProduct(this.name, Number(this.price), this.url);
  }
  isDisable() {
    return this.name === '' || this.price === '' || this.url === '';
  }
}

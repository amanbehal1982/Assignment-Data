import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: Product[] = [];

  constructor( private productService: ProductsService ) { }

  ngOnInit(): void {
    this.productList = this.productService.getProductsList();
    console.log(this.productList);
  }

}

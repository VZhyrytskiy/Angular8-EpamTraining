import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../products/services/products.service';
import { CartService } from '../../../../cart/services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  // products: Array<Product>;
  products: Promise<Product[]>;

  constructor(public productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    // this.getProducts();
  }

}
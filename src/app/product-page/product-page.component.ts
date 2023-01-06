import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductClient } from '../clients/product.client';
import { AuthenticationService } from '../services/authentication.service';
import { Product } from '../models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  public products: Product[] = []
  public displayedColumns: string[] = ['id', 'name', 'value','actions'];
  
  constructor(
    private authenticationService: AuthenticationService,
    private productClient: ProductClient
  ) {}

  ngOnInit(): void {
    this.productClient.getProductsData().subscribe((products => {
      this.products = products.data
    }))
  }

  logout(): void {
    this.authenticationService.logout();
  }
}

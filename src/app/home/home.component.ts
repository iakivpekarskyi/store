import { Component } from '@angular/core';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private productService: ProductsService
  ) {
  }

  ngOnInit(){this.productService.getProducts('http://localhost:3001/clothes', { page:0, perPage:5}).subscribe((products) =>
  console.log(products.items))

  }
}

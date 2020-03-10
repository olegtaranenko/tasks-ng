import { Component, OnInit } from '@angular/core';
import { ProductsService, IProduct } from './products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products: IProduct[] = [];
  title = 'module3';
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: any) => (this.products = data));
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService, IProduct } from './products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products: IProduct[] = [];
  title = '4. Cервисы и Http протокол';
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: any) => (this.products = data));
  }
}

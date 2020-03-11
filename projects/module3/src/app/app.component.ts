import { Component, OnInit } from '@angular/core';
import { ProductsService, IProduct } from './products.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products: IProduct[] = [];
  public title = '3. Cервисы и Http протокол';
  public products$!: Observable<IProduct[]>;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }
  public addProduct(_product: IProduct) {}
}

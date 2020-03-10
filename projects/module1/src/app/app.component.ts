import { Component } from '@angular/core';
import { IProduct, product } from '../mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public product: IProduct = product;
  public chosenProduct!: IProduct;
  public title = '1. Интерполяция и связывание';

  public addProduct(p: any): void {
    this.chosenProduct = p;
  }
}

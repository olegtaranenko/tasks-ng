import { Component } from '@angular/core';
import { products, IProduct } from '../src/mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public products: IProduct[] = products;
  title = '2. Директивы и пайпы';
}

import { Component, Input } from '@angular/core';
import { IProduct } from '../products.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public product!: IProduct;
  public addProduct(): void {}
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  feedbacks?: IFeedback;
  price: number;
  status: boolean;
  images: any;
  rating?: number | undefined;
}

export interface IFeedback {
  rate: number;
  advantages: string;
  limitations: string;
  description: string;
}
export interface IProductImage {
  url: string;
  source: string;
}
=======
import { IProduct } from '../../mocks/products';
>>>>>>> a8e7eb2c0ba8d2f2f5f33ad5a2ea2bc506c316a0

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public product!: IProduct;

  @Output()
  public addToCart: EventEmitter<void> = new EventEmitter();

  public addProduct(): void {
    this.addToCart.emit();
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  status: boolean;
  images: IProductImage[];
  rating?: number | undefined;
  feedbacks?: IFeedback;
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

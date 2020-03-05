import {
  Component,
  Input, Output, EventEmitter,
} from '@angular/core';

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  feedbacks?: IFeedback;
  price: number;
  status: boolean;
  images?: IProductImage[] | undefined;
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


@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent {
  @Input()
  public product!: IProduct;
  @Input()
  public isOdd!: boolean;

  @Output()
  public addToCart = new EventEmitter();

  public addProduct(): void {
    this.addToCart.emit();
  }
}

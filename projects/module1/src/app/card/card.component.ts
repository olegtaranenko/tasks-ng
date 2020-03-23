import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
  @Input() product: any;

  public url = '';
  public name = '';

  ngOnInit(): void {
    const {
      images: [{ url }],
      name,
    } = this.product;
    this.url = url;
    this.name = name
  }

  public addProduct() {
    console.log('addProduct');
    this.addToCart.emit(this.product);
  };
}

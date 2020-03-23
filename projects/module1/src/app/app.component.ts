import { Component, OnInit, ViewChild } from '@angular/core';
import { product } from '../mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public product = product;
  @ViewChild('terminal')
  private teminalRef = HTMLDivElement;

  public chosenProduct: any;


  public addProduct(p: any) {
    this.chosenProduct = p;
    // this.teminalRef.textContent = JSON.stringify(p);
  }

  ngOnInit(): void {
    console.dir(this.teminalRef);
  }

}

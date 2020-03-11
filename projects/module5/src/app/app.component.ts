import { Component } from '@angular/core';
import { IProduct } from 'projects/module1/src/mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public feedbackFormInfo: IProduct | undefined;
  public title = '5. Формы и свои элементы форм';
  public getFormInfo(value: IProduct) {
    this.feedbackFormInfo = value;
  }
}

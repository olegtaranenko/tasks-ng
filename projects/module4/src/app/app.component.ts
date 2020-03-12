import { Component } from '@angular/core';
import { IFeedback } from '../mocks/feedbacks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public feedbacks: IFeedback[] = [];
  public title = '4. Формы и свои элементы форм';
  public getFormInfo(value: IFeedback) {
    this.feedbacks.push(value);
  }
}

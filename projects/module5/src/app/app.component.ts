import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = '5. Формы и свои элементы форм';
  @Input()
  public set feedback(value: any) {
    if (!value) {
      return;
    }
    this.feedbackForm.patchValue(value);
  }
  public constructor(private fb: FormBuilder) {}
  public chosenProduct: any;
  public feedbackForm: FormGroup = this.fb.group({
    advantages: ['', [Validators.required, Validators.minLength(10)]],
    limitations: ['', [Validators.required, Validators.minLength(10)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    rate: ['', [Validators.required]],
  });

  public save(value: object) {
    this.chosenProduct = value;
  }

  public getField(name: string) {
    return this.feedbackForm.get(name);
  }
}

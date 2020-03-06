import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFeedback } from '@product-store/reducers/products.reducer';

@Component({
  selector: 'ng-shop-one-product-review-modal',
  templateUrl: './one-product-review-modal.component.html',
  styleUrls: ['./one-product-review-modal.component.sass'],
})
export class OneProductReviewModalComponent {
  @Input()
  public set feedback(value: IFeedback) {
    if (!value) {
      return;
    }
    this.feedbackForm.patchValue(value);
  }
  constructor(private fb: FormBuilder) {}

  public feedbackForm: FormGroup = this.fb.group({
    advantages: ['', [Validators.required, Validators.minLength(10)]],
    limitations: ['', [Validators.required, Validators.minLength(10)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    rate: ['', [Validators.required]],
  });

  public close!: () => void;
  public save!: (value: object) => void;

  public getField(name: string) {
    return this.feedbackForm.get(name);
  }
}

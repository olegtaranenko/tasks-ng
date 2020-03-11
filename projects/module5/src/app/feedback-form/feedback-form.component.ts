import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent {
  @Output()
  public createFeedback = new EventEmitter();
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
    this.createFeedback.emit(value);
  }

  public getField(name: string) {
    return this.feedbackForm.get(name);
  }
}

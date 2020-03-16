import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackFormComponent } from './feedback-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RatingControlsComponent } from './rating-controls/rating-controls.component';

describe('[Moдуль 4] Форма для отзывов', () => {
  let component: FeedbackFormComponent;
  let fixture: ComponentFixture<FeedbackFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let createFeedbackSpy: jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FeedbackFormComponent, RatingControlsComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'save').and.callThrough();
    createFeedbackSpy = spyOn(component.createFeedback, 'emit').and.callThrough();
  });

  it('компонент должен иметь метод createFeedback и Output свойства save ', () => {
    expect(component.save).toBeTruthy();
    expect(component.createFeedback).toBeTruthy();
  });

  it('клик на кнопку "Оставить отзыв" должен вызывать метод save()', () => {
    const btn = fixture.debugElement.query(By.css('.feedback-btn-control'));
    btn.triggerEventHandler('click', null);
    expect(component.save).toHaveBeenCalledBefore(createFeedbackSpy);
    expect(component.createFeedback.emit).toHaveBeenCalled();
  });

  it('форма должна быть не пустой', () => {
    expect(component.feedbackForm.valid).toBeFalsy();
  });

  it('поле description в форме должно быть валидным', () => {
    const description = component.feedbackForm.controls.description;
    expect(description.valid).toBeFalsy();

    description.setValue('');
    expect(description.hasError('required')).toBeTruthy();

    description.setValue('101010');
    expect(description.hasError('minLength')).toBeFalsy();
  });

  it('поле advantages в форме должно быть валидным', () => {
    const advantages = component.feedbackForm.controls.advantages;
    expect(advantages.valid).toBeFalsy();

    advantages.setValue('');
    expect(advantages.hasError('required')).toBeTruthy();

    advantages.setValue('101010');
    expect(advantages.hasError('minLength')).toBeFalsy();
  });

  it('поле limitations в форме должно быть валидным', () => {
    const limitations = component.feedbackForm.controls.limitations;
    expect(limitations.valid).toBeFalsy();

    limitations.setValue('');
    expect(limitations.hasError('required')).toBeTruthy();

    limitations.setValue('101010');
    expect(limitations.hasError('minLength')).toBeFalsy();
  });
});

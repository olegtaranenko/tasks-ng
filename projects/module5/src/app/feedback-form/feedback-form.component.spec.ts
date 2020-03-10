import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackFormComponent } from './feedback-form.component';
import { FormBuilder } from '@angular/forms';

describe('FeedbackFormComponent', () => {
  let component: FeedbackFormComponent;
  let fixture: ComponentFixture<FeedbackFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackFormComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

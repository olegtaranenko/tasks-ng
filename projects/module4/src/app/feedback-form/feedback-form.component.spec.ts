import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackFormComponent } from './feedback-form.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('[Module 4] Feedback Form Component', () => {
  let component: FeedbackFormComponent;
  let fixture: ComponentFixture<FeedbackFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
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
  // it('form invalid when empty', () => {
  //   expect(component.form.valid).toBeFalsy();
  // });
  // it('name field validity', () => {
  //   let name = component.user.controls['name'];
  //   expect(name.valid).toBeFalsy();

  //   let errors = {};
  //   name.setValue('');
  //   errors = name.errors || {};
  //   expect(errors['required']).toBeTruthy(); // this works
  //   expect(errors['minLength']).toBeTruthy(); // this fails, "undefined"
  // });
});

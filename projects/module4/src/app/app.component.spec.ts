import { StarRatingComponent } from './../../../module3/src/app/card/star-rating/star-rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { RatingControlsComponent } from './feedback-form/rating-controls/rating-controls.component';

describe('[Module 4] general application tests', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FeedbackFormComponent, RatingControlsComponent, StarRatingComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have title `, () => {
    const title = fixture.debugElement.query(By.css('.toolbar span'));
    const [
      {
        nativeNode: { textContent },
      },
    ] = title.childNodes;
    expect(textContent.trim()).toEqual('Курс по Angular');
  });

  it('should render right subtitle', () => {
    const subTitle = fixture.debugElement.query(By.css('.content span'));
    const [
      {
        nativeNode: { textContent },
      },
    ] = subTitle.childNodes;
    expect(textContent.trim()).toContain('4. Формы и свои элементы форм');
  });
});

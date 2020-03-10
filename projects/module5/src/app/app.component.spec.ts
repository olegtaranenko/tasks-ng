import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { MatIconModule } from '@angular/material/icon';

describe('[Module 5] general application tests', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, RatingComponent, FeedbackFormComponent],
      imports: [ReactiveFormsModule, BrowserModule, FormsModule, MatIconModule],
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
    expect(textContent).toEqual('Курс по Angular');
  });

  it('should render right subtitle', () => {
    const subTitle = fixture.debugElement.query(By.css('.content span'));
    const [
      {
        nativeNode: { textContent },
      },
    ] = subTitle.childNodes;
    expect(textContent).toContain('5. Формы и свои элементы форм');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackCardComponent } from './feedback-card.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { feedbacks } from '../../mocks/feedbacks';

describe('[Module 4] Feedback Card Component', () => {
  let component: FeedbackCardComponent;
  let fixture: ComponentFixture<FeedbackCardComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackCardComponent, StarRatingComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(FeedbackCardComponent);
    component = fixture.componentInstance;
    component.feedback = feedbacks[0];
    fixture.detectChanges();
  });

  it('should have right bindings for comment', () => {
    const commentEL = fixture.debugElement.query(By.css('.description'));
    expect(commentEL).toBeTruthy();
    const { description } = component?.feedback;
    const [{ nativeNode: commentNode }] = commentEL.childNodes;
    expect(commentNode.textContent.trim()).toEqual(description);
  });
  it('should have right bindings for advantages', () => {
    const advantagesEL = fixture.debugElement.query(By.css('.advantages'));
    expect(advantagesEL).toBeTruthy();
    const { advantages } = component?.feedback;
    const [{ nativeNode: advantagesNode }] = advantagesEL.childNodes;
    expect(advantagesNode.textContent.trim()).toEqual(advantages);
  });
  it('should have right bindings for limitations', () => {
    const limitationsEL = fixture.debugElement.query(By.css('.limitations'));
    expect(limitationsEL).toBeTruthy();
    const { limitations } = component?.feedback;
    const [{ nativeNode: limitationsNode }] = limitationsEL.childNodes;
    expect(limitationsNode.textContent.trim()).toEqual(limitations);
  });
  it('should include app-star-rating component', () => {
    const starRatingComponent = fixture.debugElement.query(By.directive(StarRatingComponent));
    expect(starRatingComponent).toBeTruthy();
  });
  //   it('should have right binding for rate', () => {
  //     const rateEL = fixture.debugElement.query(By.css('.rate'));
  //     expect(rateEL).toBeTruthy();
  //     const { rate } = component?.feedback;
  //     const [{ nativeNode: rateNode }] = rateEL.childNodes;
  //     expect(rateNode.textContent.trim()).toEqual(rate);
  //   });
});

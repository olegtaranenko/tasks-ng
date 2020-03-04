import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarRatingComponent } from './star-rating.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

describe('Stars rating component', () => {
  let fixture: ComponentFixture<StarRatingComponent>;
  let component: StarRatingComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [
        StarRatingComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
  }));
  it('check precision 0 - 0.25', () => {
    component.feedbackRate = 1.12412;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement
      .queryAll(By.css('mat-icon'));
    expect(stars[0].classes['gold-star']).toBeTruthy();
    expect(stars[1].classes['gold-star']).toBeFalsy();
    expect(stars[2].classes['gold-star']).toBeFalsy();
    expect(stars[3].classes['gold-star']).toBeFalsy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
  it('check precision 0.25 < 0.75', () => {
    component.feedbackRate = 2.423235;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement
      .queryAll(By.css('mat-icon'));
    expect(stars[0].classes['gold-star']).toBeTruthy();
    expect(stars[1].classes['gold-star']).toBeTruthy();
    expect(stars[2].classes['gold-star']).toBeTruthy();
    expect(stars[3].classes['gold-star']).toBeFalsy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
  it('check precision > 0.75', () => {
    component.feedbackRate = 3.76453;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement
      .queryAll(By.css('mat-icon'));
    expect(stars[0].classes['gold-star']).toBeTruthy();
    expect(stars[1].classes['gold-star']).toBeTruthy();
    expect(stars[2].classes['gold-star']).toBeTruthy();
    expect(stars[3].classes['gold-star']).toBeTruthy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
});

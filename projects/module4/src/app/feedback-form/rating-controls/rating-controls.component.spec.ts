import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RatingControlsComponent } from './rating-controls.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'test',
  template: `
    <app-rating-controls [formControl]="rateControl"></app-rating-controls>
  `,
})
class TestComponent {
  public rateControl = new FormControl();
}

describe('[Module 4] Rating controls component', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, ReactiveFormsModule],
      declarations: [TestComponent, RatingControlsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should show default view', () => {
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeFalsy();
    expect(stars[1].classes.selected).toBeFalsy();
    expect(stars[2].classes.selected).toBeFalsy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();
  });
  it('should right highlight', () => {
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    stars[3].triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeTruthy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();
  });
  it('should right highlighting with default value', () => {
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    component.rateControl.patchValue({
      advantages: '',
      limitations: '',
      description: '',
      rate: 2,
    });
    stars[3].triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeTruthy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();
  });

  it('should right mouseleave', () => {
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    stars[3].triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeFalsy();
    expect(stars[1].classes.selected).toBeFalsy();
    expect(stars[2].classes.selected).toBeFalsy();
    expect(stars[3].classes.selected).toBeFalsy();
    expect(stars[4].classes.selected).toBeFalsy();
  });
  it('should right selected', () => {
    const ratingControlsComponent: DebugElement = fixture.debugElement.query(By.directive(RatingControlsComponent));
    const stars: DebugElement[] = ratingControlsComponent.queryAll(By.css('mat-icon'));
    stars[3].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stars.length).toEqual(5);
    expect(stars[0].classes.selected).toBeTruthy();
    expect(stars[1].classes.selected).toBeTruthy();
    expect(stars[2].classes.selected).toBeTruthy();
    expect(stars[3].classes.selected).toBeTruthy();
    expect(stars[4].classes.selected).toBeFalsy();
  });
});

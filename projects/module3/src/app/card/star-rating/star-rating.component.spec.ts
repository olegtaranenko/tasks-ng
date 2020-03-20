import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarRatingComponent } from './star-rating.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

describe('[Moдуль 3] Рейтинг продукта', () => {
  let fixture: ComponentFixture<StarRatingComponent>;
  let component: StarRatingComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [StarRatingComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    // (component as any).star = star;
  }));
  it('проверка на значение null', () => {
    component.rate = null;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-icon'));
    expect(stars.length).toEqual(5);
    expect(stars[0].classes['gold-star']).toBeFalsy();
    expect(stars[1].classes['gold-star']).toBeFalsy();
    expect(stars[2].classes['gold-star']).toBeFalsy();
    expect(stars[3].classes['gold-star']).toBeFalsy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
  it('проверка на значение 0 - 0.25', () => {
    component.rate = 1.12412;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-icon'));
    expect(stars[0].classes['gold-star']).toBeTruthy();
    expect(stars[1].classes['gold-star']).toBeFalsy();
    expect(stars[2].classes['gold-star']).toBeFalsy();
    expect(stars[3].classes['gold-star']).toBeFalsy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
  it('проверка на значение 0.25 < 0.75', () => {
    component.rate = 2.423235;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-icon'));
    expect(stars[0].classes['gold-star']).toBeTruthy();
    expect(stars[1].classes['gold-star']).toBeTruthy();
    expect(stars[2].classes['gold-star']).toBeTruthy();
    expect(stars[3].classes['gold-star']).toBeFalsy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
  it('проверка на значение > 0.75', () => {
    component.rate = 3.76453;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-icon'));
    expect(stars[0].classes['gold-star']).toBeTruthy();
    expect(stars[1].classes['gold-star']).toBeTruthy();
    expect(stars[2].classes['gold-star']).toBeTruthy();
    expect(stars[3].classes['gold-star']).toBeTruthy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
  // it('тег с селектором .card-title должен правильно интерполировать name', () => {
  //   const titleEL = fixture.debugElement.query(By.css('.card-title'));
  //   expect(titleEL).toBeTruthy();
  //   const { name } = (component as any)?.product;
  //   const [{ nativeNode: titleNode }] = titleEL.childNodes;
  //   expect(titleNode.textContent.trim()).toEqual(name);
  // });

  // it('тег с селектором .stars-icon должен правильно интерполировать icon', () => {
  //   const titleEL = fixture.debugElement.query(By.css('.stars-icon mat-icon'));
  //   expect(titleEL).toBeDefined();
  //   const { icon } = (component as any)?.star;
  //   const [{ nativeNode: titleNode }] = titleEL.childNodes;
  //   expect(titleNode.textContent.trim()).toEqual(icon);
  // });
});

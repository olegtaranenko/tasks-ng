import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { ImgUrlPipe } from './card/img-url.pipe';
import { StarRatingComponent } from './card/star-rating/star-rating.component';

describe('[Moдуль 2] Общие тесты приложения', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CardComponent, ImgUrlPipe, StarRatingComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('проверка на создание Арр компонента', () => {
    expect(app).toBeTruthy();
  });

  it(`проверка на наличие правильного заголовка `, () => {
    const title = fixture.debugElement.query(By.css('.toolbar span'));
    const [
      {
        nativeNode: { textContent },
      },
    ] = title.childNodes;
    expect(textContent).toEqual('Курс по Angular');
  });

  it('проверка на наличие правильного подзаголовка', () => {
    const subTitle = fixture.debugElement.query(By.css('.content span'));
    const [
      {
        nativeNode: { textContent },
      },
    ] = subTitle.childNodes;
    expect(textContent.trim()).toContain('2. Директивы и пайпы');
  });
});

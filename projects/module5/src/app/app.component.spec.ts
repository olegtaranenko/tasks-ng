import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BASE_URL_TOKEN } from './config';
import { environment } from '../environments/environment';
import { ProductsService } from './shared/services/products.service';
import { CardComponent } from './content/products/card/card.component';
import { StarRatingComponent } from './content/products/card/star-rating/star-rating.component';
import { ImgUrlPipe } from './shared/pipes/img-url.pipe';
import { InterceptorService } from './shared/services/interceptor.service';
import { AppRoutingModule } from './app-routing.module';

describe('[Modуль 5] Общие тесты приложения', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, StarRatingComponent, CardComponent, ImgUrlPipe, HeaderComponent],
      imports: [HttpClientModule, MatIconModule, AppRoutingModule],
      providers: [
        ProductsService,
        {
          provide: BASE_URL_TOKEN,
          useValue: environment.baseUrl,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('проверка на создание компонента', () => {
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
    expect(textContent.trim()).toContain('5. Навигация в приложении');
  });
});

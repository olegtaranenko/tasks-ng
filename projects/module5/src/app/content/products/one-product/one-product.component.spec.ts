import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OneProductComponent } from './one-product.component';
import { SharedModule } from '../../../shared/shared.module';
import { ProductGuard } from './product.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from '../../../shared/services/products.service';
import { BASE_URL_TOKEN } from '../../../config';
import { environment } from 'projects/module5/src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { products, feedbacks } from 'projects/module5/src/mocks/products';
import { StarRatingComponent } from '../../../shared/components/star-rating/star-rating.component';
import { InterceptorService } from '../../../shared/services/interceptor.service';
import { ImgUrlPipe } from '../../../shared/pipes/img-url.pipe';
import { of } from 'rxjs';

describe('[Moдуль 5] Один продукт', () => {
  let fixture: ComponentFixture<OneProductComponent>;
  let component: OneProductComponent;
  let addToCartSpy: jasmine.Spy;
  const product = products[0];
  const feedback = feedbacks[0];
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneProductComponent, ImgUrlPipe, StarRatingComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [
        ProductGuard,
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
    fixture = TestBed.createComponent(OneProductComponent);
    component = fixture.componentInstance;
    component.product$ = of(product);
    component.feedback$ = of(feedbacks);
    fixture.detectChanges();
    spyOn(component, 'addProduct').and.callThrough();
    addToCartSpy = spyOn(component.addToCart, 'emit').and.callThrough();
  });
  it('компонент должен иметь метод addProduct и Output свойства addToCart', () => {
    expect(component.addToCart).toBeTruthy();
    expect(component.addProduct).toBeTruthy();
  });

  it('иконка продукта должна быть add_shopping_cart ', () => {
    const icon = fixture.debugElement.query(By.css('.btn-icon'));
    console.log(icon);
    expect(icon).toBeTruthy();
    const [{ nativeNode }] = icon.childNodes;
    expect(nativeNode.textContent).toEqual('add_shopping_cart');
  });

  it('тег img должен иметь правильное связывание свойств src и alt', () => {
    const imgEl = fixture.debugElement.query(By.css('.main-cont-info-img'));
    expect(imgEl).toBeTruthy();
    const {
      images: [{ url }],
      name,
    } = product;
    expect(imgEl.attributes.src).toEqual(url);
    expect(imgEl.attributes.alt).toEqual(name);
  });

  it('тег с селектором .card-title должен правильно интерполировать title', () => {
    const titleEL = fixture.debugElement.query(By.css('.product-title'));
    expect(titleEL).toBeTruthy();
    const { name } = product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent).toEqual(name);
  });

  it('тег с селектором .price-text должен правильно интерполировать price', () => {
    const { price } = product;
    const priceEl = fixture.debugElement.query(By.css('.main-cont-info-price'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    expect(priceNode.textContent.trim()).toEqual(`₽${price.toString()}.00`);
  });

  it('клик на иконку "Добавить в корзину" должен вызывать метод addProduct()', () => {
    const icon = fixture.debugElement.query(By.css('.btn-icon'));
    icon.triggerEventHandler('click', null);
    expect(component.addProduct).toHaveBeenCalledBefore(addToCartSpy);
    expect(component.addToCart.emit).toHaveBeenCalled();
  });

  it('должен включать в себя компонент app-star-rating ', () => {
    const starRatingComponent = fixture.debugElement.query(By.directive(StarRatingComponent));
    expect(starRatingComponent).toBeTruthy();
  });

  it('проверка на правильное значение поля feedback-rate', () => {
    const feedbackRateEL = fixture.debugElement.query(By.css('.feedback-rate'));
    expect(feedbackRateEL).toBeTruthy();
    const { rateControl } = feedback;
    const [{ nativeNode: titleNode }] = feedbackRateEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(rateControl);
  });
});

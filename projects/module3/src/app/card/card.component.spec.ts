import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { ImgUrlPipe } from './img-url.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { products } from '../../mocks/products';

describe('[Module 3] Card component', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;
  let addToCartSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, ImgUrlPipe, StarRatingComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.product = products[0];
    fixture.detectChanges();
    spyOn(component, 'addProduct').and.callThrough();
    addToCartSpy = spyOn(component.addToCart, 'emit').and.callThrough();
  });
  it('Should have addProduct method and addToCart Output property ', () => {
    expect(component.addToCart).toBeTruthy();
    expect(component.addProduct).toBeTruthy();
  });

  it('Should have right cart icon ', () => {
    const icon = fixture.debugElement.query(By.css('.product-add-to-cart'));
    expect(icon).toBeTruthy();
    const [{ nativeNode }] = icon.childNodes;
    expect(nativeNode.textContent.trim()).toEqual('add_shopping_cart');
  });

  it('should have right binding for img', () => {
    const imgEl = fixture.debugElement.query(By.css('.card-img-top'));
    expect(imgEl).toBeTruthy();
    const {
      images: [{ url }],
      name,
    } = component?.product;
    expect(imgEl.attributes.src).toEqual(url);
    expect(imgEl.attributes.alt).toEqual(name);
  });

  it('should have right bindings for title', () => {
    const titleEL = fixture.debugElement.query(By.css('.card-title'));
    expect(titleEL).toBeTruthy();
    const { name } = component?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(name);
  });

  it('should have right bindings for price', () => {
    const { price } = component?.product;
    const priceEl = fixture.debugElement.query(By.css('.price-text'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    expect(priceNode.textContent.trim()).toEqual(`₽${price.toString()}.00`);
  });

  it('should have right handling on icon click', () => {
    const icon = fixture.debugElement.query(By.css('.product-add-to-cart'));
    icon.triggerEventHandler('click', null);
    expect(component.addProduct).toHaveBeenCalledBefore(addToCartSpy);
    expect(component.addToCart.emit).toHaveBeenCalled();
  });

  it('should include app-star-rating component', () => {
    const ratingComponent = fixture.debugElement.query(By.directive(StarRatingComponent));
    expect(ratingComponent).toBeTruthy();
  });
});

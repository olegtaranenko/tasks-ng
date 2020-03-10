import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

describe('[Module 1] general application tests', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardComponent
      ],
      imports: [MatIconModule]
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
    const [{nativeNode: {textContent}}] = title.childNodes;
    expect(textContent).toEqual('Курс по Angular');
  });

  it('should render right subtitle', () => {
    const subTitle = fixture.debugElement.query(By.css('.content span'));
    const [{nativeNode: {textContent}}] = subTitle.childNodes;
    expect(textContent).toContain('1. Интерполяция и связывание');
  });
});

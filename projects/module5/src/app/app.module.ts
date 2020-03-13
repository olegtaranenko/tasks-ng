import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingComponent } from './card/star-rating/star-rating.component';
import { CardComponent } from './card/card.component';
import { ImgUrlPipe } from './card/img-url.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsService } from './products.service';
import { BASE_URL_TOKEN } from './config';
import { environment } from '../environments/environment';
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [AppComponent, StarRatingComponent, CardComponent, ImgUrlPipe],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule, HttpClientModule],
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
  bootstrap: [AppComponent],
})
export class AppModule {}

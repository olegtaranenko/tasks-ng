import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { BASE_URL_TOKEN } from '../config';
import { ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from '../content/products/card/star-rating/star-rating.component';
import { CardComponent } from '../content/products/card/card.component';
import { ImgUrlPipe } from './pipes/img-url.pipe';
import { ProductsService } from './services/products.service';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StarRatingComponent, CardComponent, ImgUrlPipe],
  imports: [ReactiveFormsModule, MatIconModule, HttpClientModule, CommonModule, RouterModule],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    ImgUrlPipe,
    StarRatingComponent,
    CardComponent,
  ],
  providers: [],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
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
    };
  }
}

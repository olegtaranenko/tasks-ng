import { NgModule } from '@angular/core';

// import { SharedModule } from '@shared/shared.module';
import { OneProductComponent } from './one-product.component';
import { RouterModule } from '@angular/router';
import { OneProductReviewModalComponent } from './one-product-review-modal/one-product-review-modal.component';
import { RatingComponent } from './one-product-review-modal/rating/rating.component';
import { ProductGuard } from './product.guard';

@NgModule({
  declarations: [OneProductComponent, RatingComponent, OneProductReviewModalComponent],
  imports: [
    // SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: OneProductComponent,
        canActivate: [ProductGuard],
      },
    ]),
  ],
  providers: [ProductGuard],
})
export class OneProductModule {}

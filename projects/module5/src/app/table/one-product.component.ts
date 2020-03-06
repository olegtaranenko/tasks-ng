import { IStore } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, ComponentFactoryResolver, Injector } from '@angular/core';

import { OneProductReviewModalComponent } from './one-product-review-modal/one-product-review-modal.component';
import { createFeedbackPending } from '../store/actions/products.actions';
import { CardConfirmModalComponent } from '../card/card-confirm-modal/card-confirm-modal.component';
import { addProductToCart } from 'src/app/store/actions/cart.actions';
import { IProduct, IFeedback } from '@product-store/reducers/products.reducer';
import { ModalService } from '@modal/modal.service';

@Component({
  selector: 'ng-shop-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.sass'],
})
export class OneProductComponent {
  constructor(
    private _modalService: ModalService,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector,
    private store: Store<IStore>,
  ) {}
  public product$: Observable<IProduct> = this.store.select('products', 'item');
  public addFeedback(): void {
    this._modalService.open({
      component: OneProductReviewModalComponent,
      resolver: this._componentFactoryResolver,
      injector: this._injector,
      context: {
        save: (value: IFeedback) => {
          this.store.dispatch(
            createFeedbackPending({
              feedback: { ...value },
            }),
          );
          this._modalService.close();
        },
        close: () => {
          this._modalService.close();
        },
      },
    });
  }

  public addProduct(product: IProduct): void {
    this._modalService.open({
      component: CardConfirmModalComponent,
      resolver: this._componentFactoryResolver,
      injector: this._injector,
      context: {
        product: { ...product },
        save: () => {
          this.store.dispatch(addProductToCart({ product }));
          this._modalService.close();
        },
        close: () => {
          this._modalService.close();
        },
      },
    });
  }
}

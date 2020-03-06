import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'module5';
  // public product$: Observable<IProduct> = this.store.select('products', 'item');
  // public addFeedback(): void {
  //   this._modalService.open({
  //     component: OneProductReviewModalComponent,
  //     resolver: this._componentFactoryResolver,
  //     injector: this._injector,
  //     context: {
  //       save: (value: IFeedback) => {
  //         this.store.dispatch(
  //           createFeedbackPending({
  //             feedback: { ...value },
  //           })
  //         );
  //         this._modalService.close();
  //       },
  //       close: () => {
  //         this._modalService.close();
  //       },
  //     },
  //   });
  // }

  // public addProduct(product: IProduct): void {
  //   this._modalService.open({
  //     component: CardConfirmModalComponent,
  //     resolver: this._componentFactoryResolver,
  //     injector: this._injector,
  //     context: {
  //       product: { ...product },
  //       save: () => {
  //         this.store.dispatch(addProductToCart({ product }));
  //         this._modalService.close();
  //       },
  //       close: () => {
  //         this._modalService.close();
  //       },
  //     },
  //   });
  // }
}

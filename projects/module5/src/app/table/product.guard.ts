import { IStore } from 'src/app/store/reducers';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { getProductSuccess } from '../store/actions/products.actions';
import { go } from 'src/app/store/actions/router.actions';
import { IProduct } from '@product-store/reducers/products.reducer';

@Injectable()
export class ProductGuard implements CanActivate {
  public constructor(
    private _http: HttpClient,
    private _store: Store<IStore>,
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this._http
      .get<IProduct>(`/products/${route.paramMap.get('id')}`)
      .pipe(
        map((product: IProduct | null) => {
          if (!product) {
            this._store.dispatch(go({ path: ['/products'] }));
            return false;
          }
          this._store.dispatch(getProductSuccess({ product }));
          return true;
        }),
        catchError(() => {
          this._store.dispatch(go({ path: ['/products'] }));
          return of(false);
        }),
      );
  }
}

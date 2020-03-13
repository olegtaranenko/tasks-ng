import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IProduct } from '../../../shared/services/products.service';

@Injectable()
export class ProductGuard {
  public constructor(private _http: HttpClient) {}
  public canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    return this._http.get<IProduct>(`/products/${route.paramMap.get('id')}`).pipe(
      map((product: IProduct | null) => {
        if (!product) {
          return false;
        }
        return true;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }
}

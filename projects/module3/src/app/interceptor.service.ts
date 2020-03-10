import { Injectable, Inject } from '@angular/core';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from './config';
export interface IRes {
  data: any;
  error?: string;
}
// tslint:disable-next-line: no-inferrable-types
const accessToken: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN2ZXRhMTEiLCJpYXQiOjE1ODIyMDA1OTl9.lP9t6L5bp4tH3vSY_LQP5mBGRV307PL5LoLTC6ziLx4';
@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(@Inject(BASE_URL_TOKEN) private _baseUrl: string) {}

  public intercept<T extends IRes>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpResponse<T>> {
    let headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${accessToken}`);
    const jsonReq: HttpRequest<T> = req.clone({
      headers,
      url: `${this._baseUrl}${req.url}`,
    });
    return next.handle(jsonReq).pipe(
      filter(this._isHttpResponse),
      map((res: HttpResponse<IRes>) => {
        return res.clone({ body: res.body && res.body.data });
      })
    );
  }
  private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<IRes> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}

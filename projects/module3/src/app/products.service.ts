import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IProduct {
  _id: string;
  name: string;
  description: string;
  feedbacks?: IFeedback;
  price: number;
  status: boolean;
  images: IProductImage[];
  rating: number | null;
  feedbacksCount: number | null;
  subCategory: string;
}

export interface IFeedback {
  rate: number;
  advantages: string;
  limitations: string;
  description: string;
}
export interface IProductImage {
  url: string;
  source: string;
}

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/products`);
  }
}

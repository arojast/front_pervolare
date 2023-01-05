
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductClient {
  constructor(private http: HttpClient) {}

  getProductsData(): Observable<any> {
    return this.http.get(environment.apiUrl + 'v1/products');
  }
}
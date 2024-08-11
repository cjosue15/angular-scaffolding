import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  price: number;
}

const PRODUCTS_MOCK: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
  },
  {
    id: '3',
    name: 'Product 3',
    price: 300,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {
    return of(PRODUCTS_MOCK);
  }
}

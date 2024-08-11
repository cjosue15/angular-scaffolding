import { Component, input, output } from '@angular/core';
import { Product } from '../../data-access/products.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <div>
      <h2>{{ product().name }}</h2>

      <p>Price {{ product().price }}</p>

      <button (click)="buyProduct()">Buy</button>
    </div>
  `,
})
export default class ProductCardComponent {
  product = input.required<Product>();

  buy = output<Product>();

  buyProduct() {
    this.buy.emit(this.product());
  }
}

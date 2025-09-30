import type { Product } from '../models/Product';

export class DiscountService<T extends Product> {
  applyFlatDiscount(product: T, amount: number): number {
    return product.price - amount;
  }

  applyPercentageDiscount(product: T, percent: number): number {
    return product.price * (1 - percent / 100);
  }

  getPrice(product: T): T['price'] {
    return product.price;
  }
}

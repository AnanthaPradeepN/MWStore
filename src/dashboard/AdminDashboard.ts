import type { Product, Category } from '../models/Product';
import type { Order } from '../models/Order';

export class AdminDashboard {
  static getSalesByCategory(orders: ReadonlyArray<Order>): Record<Category, number> {
    const sales: Record<Category, number> = {
      Shirts: 0,
      Trousers: 0,
      Shoes: 0,
      Accessories: 0,
    };

    for (const order of orders) {
      for (const product of order.products) {
        sales[product.category] += product.price;
      }
    }

    return sales;
  }

  static getTopSellingProducts(orders: ReadonlyArray<Order>): ReadonlyArray<Product> {
    const productSales = new Map<string, { product: Product; count: number }>();

    for (const order of orders) {
      for (const product of order.products) {
        const entry = productSales.get(product.id);
        if (entry) {
          entry.count += 1;
        } else {
          productSales.set(product.id, { product, count: 1 });
        }
      }
    }

    return [...productSales.values()]
      .sort((a, b) => b.count - a.count)
      .slice(0, 3)
      .map(entry => entry.product);
  }
}

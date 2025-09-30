import type { Product } from '../models/Product';
import type { Role } from '../models/User';

type ProductUpdateDTO = {
  [K in keyof Product]?: Product[K];
};

export class ProductService {
  private products: Product[] = [];

  addProduct(product: Product, role: Role) {
    if (role !== 'admin') throw new Error('Unauthorized');
    this.products.push(product);
  }

  updateProduct(id: string, updates: ProductUpdateDTO, role: Role) {
    if (role !== 'admin') throw new Error('Unauthorized');
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
this.products[index] = {
  ...this.products[index],
  ...updates,
} as Product;
    }
  }

  deleteProduct(id: string, role: Role) {
    if (role !== 'admin') throw new Error('Unauthorized');
    this.products = this.products.filter(p => p.id !== id);
  }

  sortProducts<T extends keyof Product>(key: T): Product[] {
    return [...this.products].sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }

  filterProducts<T extends keyof Product>(key: T, value: Product[T]): Product[] {
    return this.products.filter(p => p[key] === value);
  }
}

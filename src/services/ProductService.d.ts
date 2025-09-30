import type { Product } from '../models/Product';
import type { Role } from '../models/User';
type ProductUpdateDTO = {
    [K in keyof Product]?: Product[K];
};
export declare class ProductService {
    private products;
    addProduct(product: Product, role: Role): void;
    updateProduct(id: string, updates: ProductUpdateDTO, role: Role): void;
    deleteProduct(id: string, role: Role): void;
    sortProducts<T extends keyof Product>(key: T): Product[];
    filterProducts<T extends keyof Product>(key: T, value: Product[T]): Product[];
}
export {};
//# sourceMappingURL=ProductService.d.ts.map
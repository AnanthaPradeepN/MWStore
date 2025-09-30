import type { Product } from '../models/Product';
export declare class DiscountService<T extends Product> {
    applyFlatDiscount(product: T, amount: number): number;
    applyPercentageDiscount(product: T, percent: number): number;
    getPrice(product: T): T['price'];
}
//# sourceMappingURL=DiscountService.d.ts.map
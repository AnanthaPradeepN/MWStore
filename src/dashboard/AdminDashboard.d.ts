import type { Product, Category } from '../models/Product';
import type { Order } from '../models/Order';
export declare class AdminDashboard {
    static getSalesByCategory(orders: ReadonlyArray<Order>): Record<Category, number>;
    static getTopSellingProducts(orders: ReadonlyArray<Order>): ReadonlyArray<Product>;
}
//# sourceMappingURL=AdminDashboard.d.ts.map
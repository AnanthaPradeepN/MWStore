"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDashboard = void 0;
class AdminDashboard {
    static getSalesByCategory(orders) {
        const sales = {
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
    static getTopSellingProducts(orders) {
        const productSales = new Map();
        for (const order of orders) {
            for (const product of order.products) {
                const entry = productSales.get(product.id);
                if (entry) {
                    entry.count += 1;
                }
                else {
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
exports.AdminDashboard = AdminDashboard;
//# sourceMappingURL=AdminDashboard.js.map
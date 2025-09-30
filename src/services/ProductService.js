"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    products = [];
    addProduct(product, role) {
        if (role !== 'admin')
            throw new Error('Unauthorized');
        this.products.push(product);
    }
    updateProduct(id, updates, role) {
        if (role !== 'admin')
            throw new Error('Unauthorized');
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products[index] = {
                ...this.products[index],
                ...updates,
            };
        }
    }
    deleteProduct(id, role) {
        if (role !== 'admin')
            throw new Error('Unauthorized');
        this.products = this.products.filter(p => p.id !== id);
    }
    sortProducts(key) {
        return [...this.products].sort((a, b) => (a[key] > b[key] ? 1 : -1));
    }
    filterProducts(key, value) {
        return this.products.filter(p => p[key] === value);
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map
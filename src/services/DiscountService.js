"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountService = void 0;
class DiscountService {
    applyFlatDiscount(product, amount) {
        return product.price - amount;
    }
    applyPercentageDiscount(product, percent) {
        return product.price * (1 - percent / 100);
    }
    getPrice(product) {
        return product.price;
    }
}
exports.DiscountService = DiscountService;
//# sourceMappingURL=DiscountService.js.map
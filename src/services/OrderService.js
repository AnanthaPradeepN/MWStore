"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
class OrderService {
    orders = [];
    placeOrder(order) {
        this.orders.push(order);
        const log = `Order_${order.orderId}_${order.status}`;
        console.log(log);
    }
    updateStatus(orderId, status) {
        const order = this.orders.find(o => o.orderId === orderId);
        if (order)
            order.status = status;
    }
    applyDiscount(orderId, discount) {
        const order = this.orders.find(o => o.orderId === orderId);
        if (!order)
            throw new Error('Order not found');
        if (discount.type === 'flat')
            order.totalAmount -= discount.amount;
        if (discount.type === 'percent')
            order.totalAmount *= 1 - discount.rate / 100;
        return true;
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map
import type { Order, OrderStatus } from '../models/Order';
type Discount = {
    type: 'flat';
    amount: number;
} | {
    type: 'percent';
    rate: number;
};
type IsValidDiscount<T> = T extends {
    type: 'flat' | 'percent';
} ? true : false;
export declare class OrderService {
    private orders;
    placeOrder(order: Order): void;
    updateStatus(orderId: string, status: OrderStatus): void;
    applyDiscount<T extends Discount>(orderId: string, discount: T): IsValidDiscount<T>;
}
export {};
//# sourceMappingURL=OrderService.d.ts.map
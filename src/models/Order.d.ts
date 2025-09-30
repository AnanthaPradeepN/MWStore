import type { Product } from './Product';
type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';
type OrderLog = `Order ${string} is ${OrderStatus}`;
interface Order {
    orderId: string;
    userId: string;
    products: Product[];
    totalAmount: number;
    status: OrderStatus;
}
export type { OrderStatus, OrderLog, Order };
//# sourceMappingURL=Order.d.ts.map
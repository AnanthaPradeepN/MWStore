import type { Order, OrderStatus } from '../models/Order';

type Discount = { type: 'flat'; amount: number } | { type: 'percent'; rate: number };

type IsValidDiscount<T> = T extends { type: 'flat' | 'percent' } ? true : false;

 export class OrderService {
  private orders: Order[] = [];

  placeOrder(order: Order) {
    this.orders.push(order);
    const log: `${string}_${OrderStatus}` = `Order_${order.orderId}_${order.status}`;
    console.log(log);
  }

  updateStatus(orderId: string, status: OrderStatus) {
    const order = this.orders.find(o => o.orderId === orderId);
    if (order) order.status = status;
  }

  applyDiscount<T extends Discount>(orderId: string, discount: T): IsValidDiscount<T> {
    const order = this.orders.find(o => o.orderId === orderId);
    if (!order) throw new Error('Order not found');
    if (discount.type === 'flat') order.totalAmount -= discount.amount;
    if (discount.type === 'percent') order.totalAmount *= 1 - discount.rate / 100;
    return true as IsValidDiscount<T>;
  }
}

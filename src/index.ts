import type { Order } from "./models/Order";
import type { Payment } from "./models/Payment";
import type { Product } from "./models/Product";
import type { User } from "./models/User";
import { ProductService } from './services/ProductService';
import { UserService } from './services/UserService';
import { OrderService } from './services/OrderService';
import { PaymentService } from './services/PaymentService';
import { AdminDashboard } from './dashboard/AdminDashboard';


const products: Product[] = [
  { id: 'p1', title: 'Formal Shirt', price: 1200, size: 'M', category: 'Shirts'},
  { id: 'p2', title: 'Leather Shoes', price: 3000, size: 'L', category: 'Shoes'},
  { id: 'p3', title: 'Cotton Trousers', price: 1500, size: 'XL', category: 'Trousers' },
];

const users: User[] = [
  { id: 'u1', name: 'Anantha', email: 'anantha@example.com', role: 'admin' },
  { id: 'u2', name: 'Ravi', email: 'ravi@example.com', role: 'customer' },
];


const productService = new ProductService();
const userService = new UserService();
const orderService = new OrderService();
const paymentService = new PaymentService();


for (const product of products) {
  productService.addProduct(product, 'admin');
}


if (products[0] && products[2]) {
  const order: Order = {
    orderId: 'o1',
    userId: 'u2',
    products: [products[0], products[2]],
    totalAmount: products[0].price + products[2].price,
    status: 'pending',
  };

  orderService.placeOrder(order);

  const payment: Payment = {
    method: 'upi',
    upiId: 'ravi@upi',
  };

  paymentService.processPayment(payment).then(result => {
    console.log('Payment Result:', result);

    const orders = [order];
    const salesByCategory = AdminDashboard.getSalesByCategory(orders);
    const topProducts = AdminDashboard.getTopSellingProducts(orders);

    console.log('Sales by Category:', salesByCategory);
    console.log('Top 3 Products:', topProducts);
  });
}

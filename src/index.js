"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = require("./services/ProductService");
const UserService_1 = require("./services/UserService");
const OrderService_1 = require("./services/OrderService");
const PaymentService_1 = require("./services/PaymentService");
const AdminDashboard_1 = require("./dashboard/AdminDashboard");
const products = [
    { id: 'p1', title: 'Formal Shirt', price: 1200, size: 'M', category: 'Shirts' },
    { id: 'p2', title: 'Leather Shoes', price: 3000, size: 'L', category: 'Shoes' },
    { id: 'p3', title: 'Cotton Trousers', price: 1500, size: 'XL', category: 'Trousers' },
    { id: 'p4', title: 'Cotton pant', price: 7500, size: 'XL', category: 'Trousers' },
    { id: 'p5', title: 'Cotton Socks', price: 500, size: 'L', category: 'Trousers' },
];
const users = [
    { id: 'u1', name: 'Anantha', email: 'anantha@example.com', role: 'admin' },
    { id: 'u2', name: 'Ravi', email: 'ravi@example.com', role: 'customer' },
    { id: 'u3', name: 'Raj', email: 'raj01@example.com', role: 'customer' },
];
const productService = new ProductService_1.ProductService();
const userService = new UserService_1.UserService();
const orderService = new OrderService_1.OrderService();
const paymentService = new PaymentService_1.PaymentService();
for (const product of products) {
    productService.addProduct(product, 'admin');
}
if (products[0] && products[2]) {
    const order = {
        orderId: 'o1',
        userId: 'u2',
        products: [products[0], products[2]],
        totalAmount: products[0].price + products[2].price,
        status: 'pending',
    };
    orderService.placeOrder(order);
    const payment = {
        method: 'upi',
        upiId: 'ravi@upi',
    };
    paymentService.processPayment(payment).then(result => {
        console.log('Payment Result:', result);
        const orders = [order];
        const salesByCategory = AdminDashboard_1.AdminDashboard.getSalesByCategory(orders);
        const topProducts = AdminDashboard_1.AdminDashboard.getTopSellingProducts(orders);
        console.log('Sales by Category:', salesByCategory);
        console.log('Top 3 Products:', topProducts);
    });
}
//# sourceMappingURL=index.js.map
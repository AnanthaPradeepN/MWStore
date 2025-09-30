"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
class PaymentService {
    async processPayment(payment) {
        switch (payment.method) {
            case 'card':
                return await this.simulate('Card payment processed');
            case 'upi':
                return await this.simulate('UPI payment successful');
            case 'cod':
                return await this.simulate('COD confirmed');
            default:
                throw new Error('Invalid payment method');
        }
    }
    async simulate(message) {
        return new Promise(resolve => setTimeout(() => resolve(message), 1000));
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=PaymentService.js.map
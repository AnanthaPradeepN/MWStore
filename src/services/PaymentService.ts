import type { Payment } from '../models/Payment';

export class PaymentService {
  async processPayment(payment: Payment): Promise<string> {
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

  private async simulate(message: string): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve(message), 1000));
  }
}

type CardPayment = {
  method: 'card';
  cardNumber: string;
  cardHolder: string;
  expiry: string;
};

type UpiPayment = {
  method: 'upi';
  upiId: string;
};

type CodPayment = {
  method: 'cod';
  deliveryAddress: string;
};

export type Payment = CardPayment | UpiPayment | CodPayment;

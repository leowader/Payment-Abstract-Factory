export type PaymentMethod = "creditcard" | "debitcard" | "paypal" | "";
export type PaymentType = "creditcard" | "debitcard" | "paypal" | null;


  export interface PaymentResponse {
    finalAmount: number;
    initialAmount: number;
    message: string;
    paymentType: PaymentType; // podrías usar un union type si hay valores fijos
    state: 'SUCCESS' | 'FAILED' | 'PENDING'; // ajusta según los posibles estados
  }
  
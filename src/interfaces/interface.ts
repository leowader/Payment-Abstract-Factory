export type PaymentType = "creditcard" | "debitcard" | "paypal" | "";

export interface PaymentResponse {
  finalAmount: number;
  initialAmount: number;
  message: string;
  paymentType: PaymentType; // podrías usar un union type si hay valores fijos
  state: "SUCCESS" | "FAILED" | "PENDING"; // ajusta según los posibles estados
}

export interface ReciboEstilo {
  icono: string;
  titulo: string;
  imagen: string;
  border:string
}

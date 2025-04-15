export type PaymentType = "creditcard" | "debitcard" | "paypal" | "";
export type NotificationType = "sms" | "whatsapp" | "email" | "";
export enum Tema {
  LIGHT = "light",
  DARK = "dark"
}
export enum Formato {
  A4 = "a4",
  Letter = "letter"
}

export interface PaymentResponse {
  finalAmount: number;
  initialAmount: number;
  message: string;
  paymentType: PaymentType; // podrías usar un union type si hay valores fijos
  state: "SUCCESS" | "FAILED" | "PENDING"; // ajusta según los posibles estados
}

export interface PDFOptions {
  includeLogo: boolean;
  title: string;
  includePaymentDetails: boolean;
  includeUserInfo: boolean;
  theme: Tema;
  includeTimestamp: boolean;
  footerMessage: string;
  format: Formato;
}



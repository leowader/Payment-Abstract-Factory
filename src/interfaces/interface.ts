export type PaymentType = "creditcard" | "debitcard" | "paypal" | "";
export type NotificationType = "sms" | "whatsapp" | "email" | "";
export enum Tema {
  LIGHT = "LIGHT",
  DARK = "DARK",
}
export enum Formato {
  A4 = "A4",
  Letter = "LETTER",
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
  includeTimeStamp: boolean;
  footerMessage: string;
  format: Formato;
}

export interface DTOUserInfo {
  identificacion: string;
  nombre: string;
}

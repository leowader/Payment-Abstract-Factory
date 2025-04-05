import { PaymentResponse } from "../interfaces/interface";
import React from "react"; // Añade esta importación
export interface IRecibo {
  renderRecibo(infoPago: PaymentResponse): React.ReactElement;
}

import { IRecibo } from "../IRecibo";
import { ReciboEstilo } from "../../interfaces/interface";
import paypalImg from "../../assets/paypalImg.png";

export class PaypalRecibo implements IRecibo {
  public renderRecibo(): ReciboEstilo {
    return {
      icono: "🅿️",
      titulo: "Recibo de pago Paypal",
      imagen: paypalImg,
      border: "border-2 border-sky-400 shadow-inner",
    };
  }
}

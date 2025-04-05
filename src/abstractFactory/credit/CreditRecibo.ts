import { IRecibo } from "../IRecibo";
import { ReciboEstilo } from "../../interfaces/interface";
import NuImg from "../../assets/nuImg.png";
export class CreditRecibo implements IRecibo {
  public renderRecibo(): ReciboEstilo {
    return {
      icono: "💳",
      titulo: "Recibo de pago Crédito",
      imagen: NuImg,
      border: "border-t-8 border-b-8 border-l-2 border-r-2 border-purple-500",
    };
  }
}

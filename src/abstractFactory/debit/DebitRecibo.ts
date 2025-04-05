import { IRecibo } from "../IRecibo";
import {  ReciboEstilo } from "../../interfaces/interface";
import debitoImg  from "../../assets/debitoImg.png";

export class DebitRecibo implements IRecibo {
  public renderRecibo(): ReciboEstilo {
    return {
      icono: "🏦",
      titulo: "Recibo de pago Debito",
      imagen: debitoImg,
      border:"border-[10px] border-yellow-500 border-double"
    };
  }
    
}
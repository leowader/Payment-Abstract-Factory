import { IRecibo } from "../IRecibo";

export class PaypalRecibo implements IRecibo {
  public renderRecibo(): String {
    return "Recibo renderizado para paypal";
  }
}

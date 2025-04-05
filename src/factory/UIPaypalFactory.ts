import { IFondo } from "../abstractFactory/IFondo";
import { IRecibo } from "../abstractFactory/IRecibo";
import { PaypalFondo } from "../abstractFactory/paypal/PaypalFondo";
import { PaypalRecibo } from "../abstractFactory/paypal/PaypalRecibo";
import { IUIPaymentFactory } from "./IUIPaymentFactory";

export class UIPaypalFactory implements IUIPaymentFactory {
  public crearRecibo(): IRecibo {
    return new PaypalRecibo();
  }
  public crearFondo(): IFondo {
    return new PaypalFondo();
  }
}

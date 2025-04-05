import { CreditFondo } from "../abstractFactory/credit/CreditFondo";
import { CreditRecibo } from "../abstractFactory/credit/CreditRecibo";
import { IFondo } from "../abstractFactory/IFondo";
import { IRecibo } from "../abstractFactory/IRecibo";
import { IUIPaymentFactory } from "./IUIPaymentFactory";

export class UICreditoFactory implements IUIPaymentFactory {
  public crearRecibo(): IRecibo {
    return new CreditRecibo();
  }
  public crearFondo(): IFondo {
    return new CreditFondo();
  }
}

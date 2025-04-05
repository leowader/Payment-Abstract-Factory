import { DebitFondo } from "../abstractFactory/debit/DebitFondo";
import { DebitRecibo } from "../abstractFactory/debit/DebitRecibo";
import { IFondo } from "../abstractFactory/IFondo";
import { IRecibo } from "../abstractFactory/IRecibo";
import { IUIPaymentFactory } from "./IUIPaymentFactory";

export class UIDebitoFactory implements IUIPaymentFactory {
    public crearRecibo(): IRecibo {
       return new DebitRecibo();
    }
    public crearFondo(): IFondo {
        return new DebitFondo();
    }
    
}
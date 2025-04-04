import { IFondo } from "../IFondo";

export class PaypalFondo implements IFondo{
    
    public renderFondo(): String {
        return "Fondo renderizado para paypal"
    }
}
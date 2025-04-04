import { IFondo } from "../IFondo";

export class CreditFondo implements IFondo {
 
    public renderFondo(): String {
       return "Fondo renderizado para tarjeta Credito";
    }
}
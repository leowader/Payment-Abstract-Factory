import { IRecibo } from "../IRecibo";

export class CreditRecibo implements IRecibo {
 
    public renderRecibo(): String {
       return "Recibo renderizado para tarjeta Credito";
    }
}
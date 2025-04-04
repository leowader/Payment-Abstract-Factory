import { IRecibo } from "../IRecibo";

export class DebitRecibo implements IRecibo {
    public renderRecibo(): String {
        return "Recibo renderizado para tarjeta debito"
    }
    
}
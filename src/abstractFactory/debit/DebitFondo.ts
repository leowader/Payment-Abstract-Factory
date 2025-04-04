import { IFondo } from "../IFondo";

export class DebitFondo implements IFondo {
    public renderFondo(): String {
        return "Fondo renderizado para tarjeta debito"
    }
    
}
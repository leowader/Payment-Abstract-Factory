import { IFondo } from "../IFondo";

export class CreditFondo implements IFondo {
 
    public renderFondo(): String {
       return "bg-[#8a3ad5]";
    }
}
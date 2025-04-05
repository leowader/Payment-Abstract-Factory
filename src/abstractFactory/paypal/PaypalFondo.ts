import { IFondo } from "../IFondo";

export class PaypalFondo implements IFondo{
    
    public renderFondo(): String {
        return "bg-[#2E4E95]";
    }
}
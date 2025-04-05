import { IFondo } from "../IFondo";

export class DebitFondo implements IFondo {
    public renderFondo(): String {        
        return "bg-[#ffeb7c]"
    }
    
}
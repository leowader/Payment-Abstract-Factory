import { IFondo } from "../IFondo";

export class DebitFondo implements IFondo {
    public renderFondo(): String {        
        return "bg-[#2E954E]"
    }
    
}
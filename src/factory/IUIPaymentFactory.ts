import { IFondo } from "../abstractFactory/IFondo";
import { IRecibo } from "../abstractFactory/IRecibo";
export interface IUIPaymentFactory {  
    crearRecibo():IRecibo
    crearFondo():IFondo
}
import { IUIPaymentFactory } from "../factory/IUIPaymentFactory";
import { IUIPaymentFactoryProvider } from "./IUIPaymentFactoryProvider";
import { UICreditoFactory } from "../factory/UICreditoFactory";
export class UICreditoFactoryProvider extends IUIPaymentFactoryProvider {
    protected create(): IUIPaymentFactory {
    return new UICreditoFactory();
    }
    
    
}
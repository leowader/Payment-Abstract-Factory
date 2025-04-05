import { IUIPaymentFactory } from "../factory/IUIPaymentFactory";
import { UIPaypalFactory } from "../factory/UIPaypalFactory";
import { IUIPaymentFactoryProvider } from "./IUIPaymentFactoryProvider";

export class UIPaypalFactoryProvider extends IUIPaymentFactoryProvider {
    protected create(): IUIPaymentFactory {
        return new UIPaypalFactory();
    }
    
}
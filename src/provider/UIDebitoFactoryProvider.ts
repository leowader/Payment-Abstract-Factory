import { IUIPaymentFactory } from "../factory/IUIPaymentFactory";
import { UIDebitoFactory } from "../factory/UIDebitoFactory";
import { IUIPaymentFactoryProvider } from "./IUIPaymentFactoryProvider";

export class UIDebitoFactoryProvider extends IUIPaymentFactoryProvider {
    protected create(): IUIPaymentFactory {
        return new UIDebitoFactory();
    }
   
}
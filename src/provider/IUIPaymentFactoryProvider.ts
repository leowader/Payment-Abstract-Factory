import { IUIPaymentFactory } from "../factory/IUIPaymentFactory";

export abstract class IUIPaymentFactoryProvider {
  private iUIPaymentFactory: IUIPaymentFactory | undefined;
//   constructor(iUIPaymentFactory: IUIPaymentFactory) {
//     this.iUIPaymentFactory = iUIPaymentFactory;
//   }

  public getProvider(): IUIPaymentFactory {
    this.iUIPaymentFactory = this.create();
    return this.iUIPaymentFactory;
  }

  protected abstract create(): IUIPaymentFactory;
}

import { IUIPaymentFactoryProvider } from "../IUIPaymentFactoryProvider";
import { PaymentFamily } from "../../abstractFactory/PaymentFamily";
import { UICreditoFactoryProvider } from "../UICreditoFactoryProvider";
import { UIDebitoFactoryProvider } from "../UIDebitoFactoryProvider";
import { UIPaypalFactoryProvider } from "../UIPaypalFactoryProvider";

export function configureFactoryProvider(
  family: String
): IUIPaymentFactoryProvider {
  switch (family) {
    case PaymentFamily.creditcard:
      return new UICreditoFactoryProvider();
    case PaymentFamily.debitcard:
      return new UIDebitoFactoryProvider();
    case PaymentFamily.paypal:
      return new UIPaypalFactoryProvider();
    default:
      console.log("SE CREO UN PAYPAL POR DEFECTO");
      return new UIPaypalFactoryProvider();
  }
}

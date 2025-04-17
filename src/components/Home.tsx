import { useEffect, useState } from "react";
import { createApiInstance } from "../axios/axios";

import {
  NotificationType,
  PaymentResponse,
  PaymentType,
} from "../interfaces/interface";

import { configureFactoryProvider } from "../provider/config/configureFactoryProvider";
import { IRecibo } from "../abstractFactory/IRecibo";
import ReportForm from "./FormPDF";
import EmailForm from "./FormEmail";
import SMSForm from "./FormSms";
import WhatsAppForm from "./FormWpp";
import axios from "axios";

export default function Home() {
  const apiPayment = createApiInstance(8080);
  const apiNotification = createApiInstance(8081);
  const [amount, setAmount] = useState<string>("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [responseApi, setResponseApi] = useState<PaymentResponse | null>(null);
  const [notificationSent, setNotificationSent] = useState(false);
  const [notificationType, setNotificationType] = useState("");

  // PAGO
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>("");
  const [paymentMethodForStyle, setPaymentMethodForStyle] =
    useState<PaymentType>("");

  const handlePaymentMethodChange = (method: PaymentType) => {
    setPaymentMethod(method);
    setPaymentMethodForStyle(method);
    setAmount("");
    setShowReceipt(false);
  };

  // REDISEÑOS
  const [bg, setBg] = useState<String>("");
  const [reciboComponent, setReciboComponent] = useState<IRecibo | null>(null);

  // CAMBIO DE TIPO DE NOTIFICACION PARA EL FORM
  const handleNotificationMethodChange = async (method: NotificationType) => {
    try {
      setNotificationType(method);
    } catch (error) {
      alert("Error al procesar la notificación. Intente nuevamente.");
    }
  };

  //ENVIO DE NOTIFICACION
  const handleNotificationSent = async (data: any) => {
    try {
      const respuestaNotificacion = await apiNotification.post(
         `notification/${notificationType}`,
         data
       );
      
      setNotificationType("");
      setNotificationSent(true);
      alert(respuestaNotificacion.data);
    } catch (error) {
      alert("Error al procesar la notificación. Intente nuevamente.");
    }
  };
  
  //POST DE PAGO
  const handlePayment = async () => {
    if (!amount || Number(amount) <= 0) {
      alert("Por favor, ingrese un monto válido.");
      return;
    }
    try {
      const res = await apiPayment.post(`payment/${paymentMethod}`, {
        amount: Number(amount),
      });

      const resApi: PaymentResponse = res.data;
      setResponseApi(resApi);
      setShowReceipt(true);
      setPaymentMethod("");
    } catch (error) {
      alert("Error al procesar el pago. Intente nuevamente.");
    }
  };

  useEffect(() => {
    const res = configureFactoryProvider(paymentMethod); //SE CONFIGURA EL PROVIDER
    setBg(res.getProvider().crearFondo().renderFondo()); //SE CAMBIA EL FONDO
    const recibo = res.getProvider().crearRecibo();
    setReciboComponent(recibo);
    return () => {};
  }, [paymentMethodForStyle]);

  return (
    <div className={`flex flex-col items-center p-6 ${bg} min-h-screen`}>
      <h1 className="text-3xl font-bold mb-2"> 💲Sistema de Pago💲 </h1>
      <br />
      <h2 className="text-xl mb-4">Selecciona un método de pago</h2>
      <div className="flex gap-4 mb-6">
        {(["creditcard", "debitcard", "paypal"] as PaymentType[]).map(
          (method) => (
            <button
              key={method}
              className={`px-4 py-2 rounded ${
                paymentMethod === method ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => handlePaymentMethodChange(method)}
            >
              {method === "creditcard" && "💳 Crédito"}
              {method === "debitcard" && "💵 Débito"}
              {method === "paypal" && "🅿️ PayPal"}
            </button>
          )
        )}
      </div>

      {paymentMethod && (
        <div>
          <div className="w-64 p-4 bg-white shadow-lg rounded-lg text-center">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Monto
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded mb-4 text-center"
              placeholder="Ingrese el monto"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              className="w-full bg-green-500 text-white py-2 rounded"
              onClick={handlePayment}
            >
              Pagar
            </button>
          </div>
        </div>
      )}

      {showReceipt && responseApi && !notificationSent && notificationType === "" && (
        <>
          {reciboComponent?.renderRecibo(responseApi)}

          <div>
            <h2 className="text-xl mb-4 mt-4">
              ¿A dónde desea que le envíe la confirmación de pago?{" "}
            </h2>
            <div className="flex gap-4 mb-6">
              {(["sms", "whatsapp", "email"] as NotificationType[]).map(
                (method) => (
                  <button
                    key={method}
                    className={`px-4 py-2 rounded ${
                      paymentMethod === method
                        ? "bg-blue-500 text-white"
                        : "bg-white"
                    }`}
                    onClick={() => handleNotificationMethodChange(method)}
                  >
                    {method === "sms" && "💳 Mensaje de texto"}
                    {method === "whatsapp" && "💵 Whatsapp"}
                    {method === "email" && "🅿️ Email"}
                  </button>
                )
              )}
            </div>
          </div>
        </>
      )}
      {notificationType === "email" ? <EmailForm onSubmit={handleNotificationSent}/> : notificationType === "sms" ? <SMSForm onSubmit={handleNotificationSent}/> : notificationType === "whatsapp" ? <WhatsAppForm onSubmit={handleNotificationSent}/> : ""}
      {notificationSent && notificationType === "" && <ReportForm responseApi={responseApi} />}
    </div>
  );
}

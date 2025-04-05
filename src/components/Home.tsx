import { useEffect, useState } from "react";
import { api } from "../axios/axios";
import { PaymentResponse, PaymentType } from "../interfaces/interface";

import { configureFactoryProvider } from "../provider/config/configureFactoryProvider";
import { IRecibo } from "../abstractFactory/IRecibo";

export default function Home() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>("");
  const [paymentMethodForStyle, setPaymentMethodForStyle] =
    useState<PaymentType>("");

  const [amount, setAmount] = useState<string>("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [responseApi, setResponseApi] = useState<PaymentResponse | null>(null);

  const [bg, setBg] = useState<String>("");
  const [reciboComponent, setReciboComponent] = useState<IRecibo | null>(null);

  const handlePaymentMethodChange = (method: PaymentType) => {
    setPaymentMethod(method);
    setPaymentMethodForStyle(method);
    setAmount("");
    setShowReceipt(false);
  };

  useEffect(() => {
    const res = configureFactoryProvider(paymentMethod); //SE CONFIGURA EL PROVIDER
    setBg(res.getProvider().crearFondo().renderFondo()); //SE CAMBIA EL FONDO
    const recibo = res.getProvider().crearRecibo();
    setReciboComponent(recibo);
    return () => {};
  }, [paymentMethodForStyle]);

  const handlePayment = async () => {
    if (!amount || Number(amount) <= 0) {
      alert("Por favor, ingrese un monto válido.");
      return;
    }
    try {
      const res = await api.post(`${paymentMethod}`, {
        amount: Number(amount),
      });

      const resApi: PaymentResponse = res.data;
      setResponseApi(resApi);

      setShowReceipt(true);
      setPaymentMethod("");

      setTimeout(() => setShowReceipt(false), 4000);
    } catch (error) {
      alert("Error al procesar el pago. Intente nuevamente.");
    }
  };

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
      )}

      {showReceipt && responseApi && reciboComponent?.renderRecibo(responseApi)}
    </div>
  );
}

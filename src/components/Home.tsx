import { useEffect, useState } from "react";
import { api } from "../axios/axios";
import {
  PaymentResponse,
  PaymentType,
  ReciboEstilo,
} from "../interfaces/interface";
import { configureFactoryProvider } from "../provider/config/configureFactoryProvider";

export default function Home() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>("");
  const [paymentMethodForStyle, setPaymentMethodForStyle] =
    useState<PaymentType>("");

  const [amount, setAmount] = useState<string>("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [message, setMessage] = useState("");
  const [finalAmount, setFinalAmount] = useState(0);
  const [state, setState] = useState("");
  const [paymentType, setPaymentType] = useState<PaymentType>("");

  //VARIABLES DE ESTILOS
  const [bg, setBg] = useState<String>("");
  const [estiloRecibo, setEstiloRecibo] = useState<ReciboEstilo | null>(null);

  const handlePaymentMethodChange = (method: PaymentType) => {
    setPaymentMethod(method);
    setPaymentMethodForStyle(method);
    console.log("Método de pago seleccionado:", method);
    setAmount("");
    setShowReceipt(false);
  };

  useEffect(() => {
    const res = configureFactoryProvider(paymentMethod); //SE CONFIGURA EL PROVIDER
    setBg(res.getProvider().crearFondo().renderFondo()); //SE CAMBIA EL FONDO
    setEstiloRecibo(res.getProvider().crearRecibo().renderRecibo()); //SE CAMBIA LOS ESTILOS DEL RECIBO
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

      const response: PaymentResponse = res.data;
      setPaymentType(response.paymentType);
      setMessage(response.message);
      setFinalAmount(response.finalAmount);
      setState(response.state);
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

      {showReceipt && (
        <div
          className={`relative flex flex-col items-center bg-white p-6 w-80 shadow-lg rounded-lg font-mono mt-6 ${estiloRecibo?.border}`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-300 rounded-b-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-300 rounded-t-full"></div>

          <h2 className="text-xl font-bold border-b w-full text-center pb-2 mb-4">
            {estiloRecibo?.icono} {estiloRecibo?.titulo}
          </h2>

          {/* Imagen dinámica desde estiloRecibo */}
          {estiloRecibo?.imagen && (
            <img
              src={estiloRecibo.imagen}
              alt="Método de pago"
              className=" object-contain mb-4"
            />
          )}

          <div className="text-sm w-full">
            <p className="flex justify-between border-b py-1">
              <span>Subtotal:</span>{" "}
              <span>${parseFloat(amount).toFixed(2)}</span>
            </p>
            <p className="flex justify-between border-b py-1">
              <span>Total Pago:</span> <span>${finalAmount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between border-b py-1">
              <span>Medio de pago:</span>
              <span>
                {paymentType === "creditcard"
                  ? "Tarjeta de Crédito"
                  : paymentType === "debitcard"
                  ? "Tarjeta de Débito"
                  : "PayPal"}
              </span>
            </p>
            <p className="flex justify-between border-b py-1">
              <span>Estado:</span> <span>{state}</span>
            </p>
            <p className="text-green-600 font-bold text-center mt-2">
              ✅ Pago exitoso
            </p>
            <p className="text-gray-600 text-center italic mt-2">{message}</p>
          </div>

          <div className="border-t border-dashed w-full mt-4 pt-2 text-center text-xs text-gray-500">
            Gracias por su compra
          </div>
        </div>
      )}
    </div>
  );
}

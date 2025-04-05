import { IRecibo } from "../IRecibo";
import { PaymentResponse } from "../../interfaces/interface";
import NuImg from "../../assets/nuImg.png";
import React from "react"; // Añade esta importación

export class CreditRecibo implements IRecibo {
  public renderRecibo(infoPago: PaymentResponse): React.ReactElement {
    return (
      <div className="relative flex flex-col items-center bg-gradient-to-r from-white to-blue-50 p-6 w-80 shadow-2xl rounded-xl font-sans mt-6 border-t-8 border-b-8 border-l-2 border-r-2 border-purple-600">
        {/* Bordes decorativos superior e inferior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-purple-600 rounded-b-full"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-purple-600 rounded-t-full"></div>

        <h2 className="text-2xl font-bold border-b w-full text-center pb-2 mb-4 text-purple-800">
          Recibo de pago Crédito
        </h2>

        {/* Imagen del método de pago */}
        <img
          src={NuImg}
          alt="Método de pago"
          className="w-24 h-24 object-contain mb-4"
        />

        <div className="text-sm w-full text-purple-900">
          <p className="flex justify-between border-b py-1">
            <span>Subtotal:</span>
            <span>${infoPago.initialAmount.toFixed(2)}</span>
          </p>
          <p className="flex justify-between border-b py-1">
            <span>Total Pago:</span>
            <span>${infoPago.finalAmount.toFixed(2)}</span>
          </p>
          <p className="flex justify-between border-b py-1">
            <span>Medio de pago:</span>
            <span>Tarjeta de Credito</span>
          </p>
          <p className="flex justify-between border-b py-1">
            <span>Estado:</span>
            <span>{infoPago.state}</span>
          </p>
          <p className="text-green-600 font-bold text-center mt-2">
            ✅ Pago exitoso
          </p>
          <p className="text-gray-600 text-center italic mt-2">
            {infoPago.message}
          </p>
        </div>

        <div className="border-t border-dashed w-full mt-4 pt-2 text-center text-xs text-gray-500">
          Gracias por su compra
        </div>
      </div>
    );
  }
}

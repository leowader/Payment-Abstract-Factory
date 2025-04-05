import { IRecibo } from "../IRecibo";
import { PaymentResponse } from "../../interfaces/interface";
import debitoImg from "../../assets/debitoImg.png";

export class DebitRecibo implements IRecibo {
  public renderRecibo(infoPago: PaymentResponse): React.ReactElement {
    return (
      <div className="relative flex flex-col bg-white p-6 w-[600px] shadow-lg rounded-lg font-mono mt-6 border-[10px] border-yellow-500 border-double">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-300 rounded-b-full"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-300 rounded-t-full"></div>

        <h2 className="text-xl font-bold border-b w-full text-center pb-2 mb-4">
          Recibo de pago Crédito
        </h2>

        {/* Contenedor horizontal dividido en dos mitades */}
        <div className="flex flex-row w-full">
          {/* Mitad izquierda: información */}
          <div className="w-1/2 pr-4 border-r border-gray-300">
            <div className="text-sm">
              <p className="flex justify-between border-b py-1">
                <span>Subtotal:</span>{" "}
                <span>${infoPago.initialAmount.toFixed(2)}</span>
              </p>
              <p className="flex justify-between border-b py-1">
                <span>Total Pago:</span>{" "}
                <span>${infoPago.finalAmount.toFixed(2)}</span>
              </p>
              <p className="flex justify-between border-b py-1">
                <span>Medio de pago:</span>
                <span>Tarjeta de Debito</span>
              </p>
              <p className="flex justify-between border-b py-1">
                <span>Estado:</span> <span>{infoPago.state}</span>
              </p>
              <p className="text-green-600 font-bold text-center mt-2">
                ✅ Pago exitoso
              </p>
              <p className="text-gray-600 text-center italic mt-2">
                {infoPago.message}
              </p>
            </div>
          </div>

          {/* Mitad derecha: imagen */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={debitoImg}
              alt="Método de pago"
              className="object-contain"
            />
          </div>
        </div>

        <div className="border-t border-dashed w-full mt-4 pt-2 text-center text-xs text-gray-500">
          Gracias por su compra
        </div>
      </div>
    );
  }
}

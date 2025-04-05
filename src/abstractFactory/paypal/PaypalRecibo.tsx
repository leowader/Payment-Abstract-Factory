import { IRecibo } from "../IRecibo";
import { PaymentResponse } from "../../interfaces/interface";
import paypalImg from "../../assets/paypalImg.png";

export class PaypalRecibo implements IRecibo {
  public renderRecibo(infoPago: PaymentResponse): React.ReactElement {
    return (
      <div
        className="relative flex flex-col items-center p-8 w-80 shadow-xl rounded-xl font-sans mt-8 border-t-8 border-b-8 border-l-4 border-r-4 border-blue-950 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, #0070ba, #ffffff)`,
        }}
      >
        {/* Contenido principal */}
        <div className="relative z-10 w-full">
          {/* Etiqueta flotante */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0070ba] text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md text-center w-56">
            Transferencia Bancaria
          </div>

          {/* Tarjeta translúcida con blur */}
          <div className="w-full mt-10 text-gray-900 text-sm bg-white/60 backdrop-blur-md p-4 rounded-lg shadow-inner">
            <div className="flex justify-between border-b pb-2 mb-2">
              <span>Monto Inicial:</span>
              <span>${infoPago.initialAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b pb-2 mb-2">
              <span>Total Transferido:</span>
              <span>${infoPago.finalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b pb-2 mb-2">
              <span>Método de Pago:</span>
              <span>{infoPago.paymentType}</span>
            </div>
            <div className="flex justify-between border-b pb-2 mb-2">
              <span>Estado:</span>
              <span>{infoPago.state}</span>
            </div>
            <div className="mt-3 text-center font-semibold text-green-600">
              {infoPago.state === "SUCCESS"
                ? "✅ Transacción Exitosa"
                : "❌ Transacción Fallida"}
            </div>
            <div className="text-center italic text-gray-700 mt-1">
              {infoPago.message}
            </div>
            <img
              src={paypalImg}
              alt="Método de pago"
              className="w-60 h-30 object-contain mb-4"
            />
          </div>

          <div className="border-t border-dotted w-full mt-6 pt-2 text-center text-xs text-gray-600">
            Gracias por confiar en nosotros
          </div>
        </div>
      </div>
    );
  }
}

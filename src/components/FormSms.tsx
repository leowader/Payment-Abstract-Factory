import { useState } from "react";

type SMSFormProps = {
  onSubmit: (data: any) => void;
};

export default function SMSForm({ onSubmit }: SMSFormProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [senderId, setSenderId] = useState("");
  const [deliveryReportRequired, setDeliveryReportRequired] = useState(false);
  const [scheduleTime, setScheduleTime] = useState("");

  const handleSubmit = () => {
    const smsData = {"smsNotification":{
      phoneNumber,
      message,
      senderId,
      deliveryReportRequired,
      scheduleTime,
    }};
    onSubmit(smsData);
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4 mt-6">
      <h2 className="text-xl font-bold text-gray-700">SMS Form</h2>

      <input
        type="text"
        placeholder="Número de destinatario (Phone Number)"
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
      />

      <textarea
        placeholder="Mensaje (Message)"
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300 h-24"
      />

      <input
        type="text"
        placeholder="Identificador del remitente (Sender ID)"
        onChange={(e) => setSenderId(e.target.value)}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={(e) => setDeliveryReportRequired(e.target.checked)}
          id="deliveryReport"
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="deliveryReport" className="text-gray-700 font-medium">
          Delivery Report Required
        </label>
      </div>

      <input
        type="datetime-local"
        value={scheduleTime}
        onChange={(e) => setScheduleTime(e.target.value)}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl mt-4 hover:bg-blue-700"
      >
        Enviar
      </button>

    </div>
  );
}

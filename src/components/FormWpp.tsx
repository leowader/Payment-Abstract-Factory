import { useState } from "react";

type WppFormProps = {
  onSubmit: (data: any) => void;
};

export default function WhatsAppForm({ onSubmit }: WppFormProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [language, setLanguage] = useState("");


  const handleSubmit = () => {
    const whatsappData = {"whatsappNotification":{
      phoneNumber,
      message,
      mediaUrl,
      caption,
      language,
    }};
    onSubmit(whatsappData);
  };
  

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4 mt-6">
      <h2 className="text-xl font-bold text-gray-700">Formulario WhatsApp</h2>

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
        placeholder="Imagen (Media URL)"
        onChange={(e) => setMediaUrl(e.target.value)}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
      />

      <input
        type="text"
        placeholder="Mensaje de la imagen (Caption)"
        onChange={(e) => setCaption(e.target.value)}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
      />

      <input
        type="text"
        placeholder="Language"
        onChange={(e) => setLanguage(e.target.value)}
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

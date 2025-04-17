import { useState } from "react";

type EmailFormProps = {
  onSubmit: (data: any) => void;
};

export default function EmailForm({ onSubmit }: EmailFormProps) {
  const [ccList, setCcList] = useState([""]);
  const [bccList, setBccList] = useState([""]);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = () => {
    const emailData = {"emailNotification":{
      to,
      subject,
      body,
      ccList,
      bccList,
      priority,
    }};
    onSubmit(emailData);
  };  

  const handleAddField = (setFn: any, list: string[]) => {
    setFn([...list, ""]);
  };

  const handleRemoveField = (setFn: any, list: string[], index: number) => {
    const updated = list.filter((_, i) => i !== index);
    setFn(updated);
  };

  const handleChange = (setFn: any, list: string[], index: number, value: string) => {
    const updated = [...list];
    updated[index] = value;
    setFn(updated);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4">
      <h2 className="text-xl font-bold">Formulario email</h2>

      <input type="text" placeholder="Destinatario (To)" onChange={(e) => setTo(e.target.value)} className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring" />
      <input type="text" placeholder="Asunto (Subject)" onChange={(e) => setSubject(e.target.value)} className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring" />
      <textarea placeholder="Contenido del correo (Body)" onChange={(e) => setBody(e.target.value)} className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring h-24" />

      <div>
        <label className="font-semibold">Destinatarios con copia - CC:</label>
        {ccList.map((item, index) => (
          <div key={index} className="flex gap-2 mt-1">
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(setCcList, ccList, index, e.target.value)}
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring flex-1"
            />
            <button onClick={() => handleAddField(setCcList, ccList)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">+</button>
            {ccList.length > 1 && (
              <button onClick={() => handleRemoveField(setCcList, ccList, index)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition bg-red-500">−</button>
            )}
          </div>
        ))}
      </div>

      <div>
        <label className="font-semibold">Destinatarios con copia oculta - BCC:</label>
        {bccList.map((item, index) => (
          <div key={index} className="flex gap-2 mt-1">
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(setBccList, bccList, index, e.target.value)}
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring flex-1"
            />
            <button onClick={() => handleAddField(setBccList, bccList)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">+</button>
            {bccList.length > 1 && (
              <button onClick={() => handleRemoveField(setBccList, bccList, index)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition bg-red-500">−</button>
            )}
          </div>
        ))}
      </div>

      <div>
        <label className="font-semibold">Prioridad:</label>
        <select className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring" onChange={(e) => setPriority(e.target.value)}>
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl mt-4 hover:bg-blue-700"
      >
        Enviar
      </button>
    </div>
  );
}


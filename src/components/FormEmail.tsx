import { useState } from "react";

type EmailFormProps = {
  onSubmit: (data: any) => void;
};

export default function EmailForm({ onSubmit }: EmailFormProps) {
  const [cc, setCcList] = useState([""]);
  const [bcc, setBccList] = useState([""]);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = () => {
    const emailData = {"emailNotification":{
      to,
      subject,
      body,
      cc,
      bcc,
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
        {cc.map((item, index) => (
          <div key={index} className="flex gap-2 mt-1">
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(setCcList, cc, index, e.target.value)}
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring flex-1"
            />
            <button onClick={() => handleAddField(setCcList, cc)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">+</button>
            {cc.length > 1 && (
              <button onClick={() => handleRemoveField(setCcList, cc, index)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition bg-red-500">−</button>
            )}
          </div>
        ))}
      </div>

      <div>
        <label className="font-semibold">Destinatarios con copia oculta - BCC:</label>
        {bcc.map((item, index) => (
          <div key={index} className="flex gap-2 mt-1">
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(setBccList, bcc, index, e.target.value)}
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring flex-1"
            />
            <button onClick={() => handleAddField(setBccList, bcc)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">+</button>
            {bcc.length > 1 && (
              <button onClick={() => handleRemoveField(setBccList, bcc, index)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition bg-red-500">−</button>
            )}
          </div>
        ))}
      </div>

      <div>
        <label className="font-semibold">Prioridad:</label>
        <select className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring" onChange={(e) => setPriority(e.target.value)}>
          <option>ALTA</option>
          <option>MEDIA</option>
          <option>BAJA</option>
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


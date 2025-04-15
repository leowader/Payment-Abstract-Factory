// components/ReportForm.tsx
"use client";

import { useState } from "react";
import { Tema, Formato, PDFOptions } from "../interfaces/interface";

export default function ReportForm() {
  const [form, setForm] = useState<PDFOptions>({
    includeLogo: true,
    title: "",
    includePaymentDetails: true,
    includeUserInfo: true,
    theme: Tema.LIGHT,
    includeTimestamp: true,
    footerMessage: "",
    format: Formato.A4,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow rounded-2xl space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-700">Configuración del Reporte</h2>
      {[
        { label: "Incluir logo", name: "includeLogo" },
        { label: "Incluir detalles de pago", name: "includePaymentDetails" },
        { label: "Incluir información del usuario", name: "includeUserInfo" },
        { label: "Incluir fecha y hora", name: "includeTimestamp" },
      ].map(({ label, name }) => (
        <label key={name} className="flex items-center justify-between">
          <span className="text-gray-600">{label}</span>
          <input
            type="checkbox"
            name={name}
            checked={form[name as keyof PDFOptions] as boolean}
            onChange={handleChange}
            className="w-5 h-5 text-blue-600 rounded"
          />
        </label>
      ))}
      <div>
        <label className="block text-gray-600">Título del reporte</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Título"
        />
      </div>

      <div>
        <label className="block text-gray-600">Mensaje del pie de página</label>
        <input
          type="text"
          name="footerMessage"
          value={form.footerMessage}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="Mensaje final"
        />
      </div>

      <div>
        <label className="block text-gray-600">Tema</label>
        <select
          name="Tema"
          value={form.theme}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
        >
          {Object.values(Tema).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-600">Formato</label>
        <select
          name="format"
          value={form.format}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
        >
          {Object.values(Formato).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Generar Reporte
      </button>
    </form>
  );
}

"use client";

import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import HeaderDocs from "../../components/HeaderDocs";

import { useState } from "react";

export default function QuemSomos() {
  const [form, setForm] = useState({
    nome: "",
    motivo: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Contato enviado!");
  };

  return (
    <>
      <Menu />

      <HeaderDocs
        title="Contato"
        description="Quer tirar dúvidas, sugerir temas ou comentar sobre ferramentas elétricas para instalações seguras e eficientes? Preencha o formulário abaixo e entraremos em contato. Sua opinião é muito importante para continuarmos produzindo conteúdo de qualidade para profissionais e entusiastas da área elétrica!"
      />

      <div className="max-w-7xl mx-auto py-24 px-5 xl:px-0">
        <form
          onSubmit={handleSubmit}
          className="bg-[#F2F2F2] p-6 rounded-lg w-full text-[#232536]"
        >
          <h2 className="text-xl xl:text-lg font-semibold mb-9">
            Preencha o formulário abaixo para enviar seu contato
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-3 font-medium">
                Seu nome completo
              </label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full border bg-white border-[#E2E8F0] rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label className="block mb-3 font-medium">
                Motivo do contato
              </label>
              <input
                type="text"
                name="motivo"
                value={form.motivo}
                onChange={handleChange}
                className="w-full border bg-white border-[#E2E8F0] rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-3 font-medium">Mensagem</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              className="w-full h-36 border bg-white border-[#E2E8F0] rounded px-3 py-3 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Enviar contato
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

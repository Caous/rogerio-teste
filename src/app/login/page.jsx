"use client";

import Link from "next/link";

export default function CMS() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-6">
        <h1 className="text-4xl font-bold text-center text-[#232536]">
          Acesse sua conta
        </h1>
        <p className="text-center text-[#232536] mt-4 mb-10 text-xl font-medium">
          Portal de conteúdos do blog
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-[#232536] mb-3">
              Usuário
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="border border-[#D4D7E3] w-full px-5 py-3 rounded-lg bg-gray-100 text-[#232536] outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-[#232536] mb-3 mt-6">
              Senha
            </label>
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Digite sua senha"
                className="border border-[#D4D7E3] w-full px-5 py-3 rounded-lg bg-gray-100 text-[#232536] outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <Link href="/login/cms">
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#FE5000] text-white font-medium hover:bg-orange-700 transition text-lg"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

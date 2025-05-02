"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black text-white px-6 py-12">
        <div className="absolute inset-0">
          <img
            src="/wallpaper.png"
            alt="Pessoa usando furadeira"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-center gap-16 xl:gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-orange.svg"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <p className="text-lg mb-6 w-full lg:w-3/4">
              Ferramentas elétricas necessárias para instalação de painéis de
              distribuição elétrica residencial.
            </p>
            <a className="text-lg" href="mailto:contato@gmail.com">
              contato@gmail.com
            </a>
          </div>

          <div>
            <ul className="space-y-4 text-lg mr-0 xl:mr-24">
              <li>
                <a href="/politica-de-privacidade">Política de Privacidade</a>
              </li>
              <li>
                <a href="/politicas-de-comentarios">Políticas de Comentários</a>
              </li>
              <li>
                <a href="/politica-de-cookie">Política de Cookie</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4 text-lg">
              <li>
                <Link href="/termos-de-uso">Termos de Uso</Link>
              </li>
              <li>
                <Link href="/quem-somos">Quem Somos</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

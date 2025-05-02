"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 px-5 max-w-7xl mx-auto">
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Image src="/logo.svg" alt="Logo" width={70} height={70} />
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-12 items-center text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-[#FE5000] transition text-lg">
              Início
            </Link>
          </li>

          <Menu as="li" className="relative list-none">
            <div>
              <MenuButton className="inline-flex items-center gap-x-1.5 text-lg font-medium text-gray-700 hover:text-[#FE5000] transition">
                Categorias
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </MenuButton>
            </div>

            <MenuItems className="absolute mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/corte"
                      className={`block px-4 py-2 text-lg text-gray-700 ${
                        active ? "bg-gray-100 text-gray-900" : ""
                      }`}
                    >
                      Corte
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/medicao-eletrica"
                      className={`block px-4 py-2 text-lg text-gray-700 ${
                        active ? "bg-gray-100 text-gray-900" : ""
                      }`}
                    >
                      Medição Elétrica
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/crimpagem-e-conexao"
                      className={`block px-4 py-2 text-lg text-gray-700 ${
                        active ? "bg-gray-100 text-gray-900" : ""
                      }`}
                    >
                      Crimpagem e Conexão
                    </Link>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <li>
            <Link
              href="/quem-somos"
              className="hover:text-[#FE5000] transition text-lg"
            >
              Quem Somos
            </Link>
          </li>
          <li>
            <Link
              href="/termos-de-uso"
              className="hover:text-[#FE5000] transition text-lg"
            >
              Termos de Uso
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className="hover:text-[#FE5000] transition text-lg"
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="mt-4 lg:hidden flex flex-col space-y-4 text-gray-700 text-lg font-medium">
          <Link href="/" className="hover:text-[#FE5000] transition">
            Início
          </Link>
          <Menu as="div" className="relative">
            <MenuButton className="flex items-center gap-1 hover:text-[#FE5000] transition">
              Categorias
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="mt-2 w-full rounded-md bg-white shadow-md focus:outline-none z-10">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/corte"
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Corte
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/medicao-eletrica"
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Medição Elétrica
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/crimpagem-e-conexao"
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Crimpagem e Conexão
                      </Link>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
          <Link href="/quem-somos" className="hover:text-[#FE5000] transition">
            Quem Somos
          </Link>
          <Link
            href="/termos-de-uso"
            className="hover:text-[#FE5000] transition"
          >
            Termos de Uso
          </Link>
          <Link href="/contato" className="hover:text-[#FE5000] transition">
            Contato
          </Link>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Desativar() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5 xl:p-10">
      <div className="flex justify-between mb-6">
        <Link href="/login/cms">
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Volta a editar
          </button>
        </Link>
      </div>

      <div className="py-10">
        <h1 className="text-3xl font-semibold mb-9">Desativar postagens</h1>

        <div>
          <input
            type="text"
            placeholder="Pesquisar postagem..."
            className="bg-slate-100 w-full h-14 pl-6 pr-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />

          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-11">
                {paginatedPosts.map((p, idx) => (
                  // <Link key={idx} href={`/blog/${p.id}`} className="w-full xl:w-[392px]">
                  <Link key={idx} href={`/login/cms/${p.id}`} className="w-full xl:w-[392px]">
                    <div className="h-60 w-full relative overflow-hidden rounded-md object-cover group-hover:scale-105 duration-300 transition-all">
                      <Image
                        src={p.imagem_capa || "/default.jpg"}
                        alt={`${p.titulo} - thumbnail`}
                        sizes="100vh"
                        className="object-cover"
                        fill
                      />
                    </div>

                    <div className="text-[#FE5000] flex font-semibold text-base space-x-10 py-3">
                      <div>{p.data_publicacao}</div>
                    </div>

                    <h2 className="text-2xl leading-7 font-semibold py-1 line-clamp-2">
                      {p.titulo}
                    </h2>

                    <button
                      onClick={async (e) => {
                        e.preventDefault(); // evita redirecionamento por conta do Link
                        try {
                          const res = await fetch(`/api/posts?id=${p.id}`, {
                            method: "PATCH",
                          });
                          const data = await res.json();

                          if (data.success) {
                            alert("Postagem desativada com sucesso!");
                            // Atualiza a lista removendo o post desativado
                            setPosts((prev) => prev.filter((post) => post.id !== p.id));
                          } else {
                            alert("Erro ao desativar postagem.");
                          }
                        } catch (error) {
                          console.error("Erro ao desativar postagem:", error);
                          alert("Erro inesperado.");
                        }
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded my-4"
                    >
                      Desativar postagem
                    </button>
                  </Link>
                ))}
              </div>

              {/* Paginação */}
              <div className="flex justify-center mt-12 space-x-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50"
                >
                  Anterior
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className={`px-4 py-2 rounded ${currentPage === i + 1
                      ? "bg-[#FE5000] text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50"
                >
                  Próximo
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500 mt-10">Nenhuma postagem encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}

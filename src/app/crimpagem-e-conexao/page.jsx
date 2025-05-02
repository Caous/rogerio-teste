// src/app/crimpagemconexao/page.jsx

import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Image from "next/image";
import Link from "next/link";

const POSTS_PER_PAGE = 6;

async function getPosts() {
  const res = await fetch("https://n3digitalmarketing.com/api/posts", {
    // Muda do localhost
    cache: "no-store", // força SSR
  });
  return res.json();
}

export default async function CrimpagemConexao({ searchParams }) {
  const posts = await getPosts();

  const searchTerm = searchParams?.busca?.toLowerCase() || "";
  const currentPage = parseInt(searchParams?.page) || 1;

  const filteredPosts = posts.filter(
    (post) =>
      post.categoria === "Ferramentas de Crimpagem e Conexão" &&
      post.titulo.toLowerCase().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const makePageLink = (page) =>
    `/crimpagemconexao?${searchTerm ? `busca=${searchTerm}&` : ""}page=${page}`;

  return (
    <div>
      <Menu />

      <div className="max-w-7xl mx-auto py-24 p-5 xl:p-10">
        <h2 className="text-[#FE5000] flex font-semibold text-xl mb-3">
          Categorias
        </h2>
        <h1 className="text-3xl font-semibold mb-9">
          Ferramentas de Crimpagem e Conexão
        </h1>

        <form method="GET">
          <input
            type="text"
            name="busca"
            placeholder="Pesquisar postagem..."
            defaultValue={searchTerm}
            className="bg-slate-100 w-full h-14 pl-6 pr-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        {filteredPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-11">
              {paginatedPosts.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.id}`}
                  className="w-full xl:w-[392px]"
                >
                  <div className="h-60 w-full relative overflow-hidden rounded-md object-cover group-hover:scale-105 duration-300 transition-all">
                    <Image
                      src={p.imagem_capa}
                      alt={`${p.titulo} - thumbnail`}
                      sizes="100vh"
                      className="object-cover"
                      fill
                    />
                  </div>

                  <div className="text-[#FE5000] flex font-semibold text-base space-x-10 py-3">
                    <div>
                      {new Date(p.data_postagem).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>

                  <h2 className="text-2xl leading-7 font-semibold py-1 line-clamp-2">
                    {p.titulo}
                  </h2>

                  <p className="my-4 w-fit text-[#667085] font-medium text-lg">
                    {p.descricao}
                  </p>

                  <p className="text-sm bg-[#FE5000] text-white font-medium my-4 w-fit px-4 py-1 rounded-full">
                    {p.categoria}
                  </p>
                </Link>
              ))}
            </div>

            {/* Paginação */}
            <div className="flex justify-center mt-12 space-x-2">
              {currentPage > 1 && (
                <Link href={makePageLink(currentPage - 1)}>
                  <button className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300">
                    Anterior
                  </button>
                </Link>
              )}

              {Array.from({ length: totalPages }, (_, i) => (
                <Link key={i} href={makePageLink(i + 1)}>
                  <button
                    className={`px-4 py-2 rounded ${
                      currentPage === i + 1
                        ? "bg-[#FE5000] text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                </Link>
              ))}

              {currentPage < totalPages && (
                <Link href={makePageLink(currentPage + 1)}>
                  <button className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300">
                    Próximo
                  </button>
                </Link>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-500 mt-10">Nenhuma postagem encontrada.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

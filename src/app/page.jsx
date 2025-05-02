import Footer from "../components/Footer";
import Menu from "../components/Menu";
import PaginationControls from "../components/PaginationControls"; // componente com 'use client'
import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://n3digitalmarketing.com/api/posts", {
    cache: "no-store", // força SSR sempre
  });
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();
  const totalPages = Math.ceil(posts.length / 6);

  const categories = [
    "Ferramentas de Medição Elétrica",
    "Ferramentas de Corte",
    "Ferramentas de Crimpagem e Conexão",
  ];

  const tags = [
    "Blog",
    "Ferramentas Elétricas",
    "Ferramentas",
    "Truques",
    "Segurança",
    "Reformas casa",
  ];

  return (
    <div>
      <Menu />

      <section className="bg-[url(/wallpaper.png)] text-white py-20 px-6 lg:px-20 bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="bg-[#FE5000] text-white px-3 py-1 rounded text-base font-semibold uppercase">
              Blog de Ferramentas
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold">
              Sua mão na massa começa aqui
            </h1>
            <p className="text-white leading-relaxed text-xl">
              Conheça as ferramentas elétricas essenciais para a instalação
              segura e eficiente de painéis de distribuição elétrica
              residencial. Neste guia, apresentamos os equipamentos
              indispensáveis para profissionais e entusiastas, com foco em
              precisão, segurança e produtividade no trabalho elétrico.
            </p>
          </div>

          <div className="space-y-8">
            {posts.slice(0, 2).map((p, idx) => (
              <Link
                key={idx}
                href={`/blog/${p.id}`}
                className="flex gap-7 items-center flex-wrap xl:flex-nowrap"
              >
                <img
                  src={p.imagem_capa}
                  alt={`${p.titulo} - thumbnail`}
                  className="w-full lg:w-56 h-48 object-cover border border-[#FE5000]"
                  width={224}
                  height={192}
                />

                <div>
                  <span className="bg-[#FE5000] text-white px-3 py-1 rounded text-sm font-semibold uppercase">
                    {new Date(p.data_postagem).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>

                  <h3 className="text-white font-semibold my-3 text-2xl lg:text-xl">
                    {p.titulo}
                  </h3>

                  <p className="text-white text-lg lg:text-base">
                    {p.descricao}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto p-5 xl:p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Conteúdos mais recentes
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {posts.slice(2, 3).map((p, idx) => (
            <Link key={idx} href={`/blog/${p.id}`} className="overflow-hidden">
              <img
                src={p.imagem_capa}
                alt={`${p.titulo} - thumbnail`}
                className="w-full h-[250px] object-cover"
                width={224}
                height={192}
              />

              <div className="py-6">
                <p className="text-[#FE5000] font-semibold mb-2">{p.date}</p>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {p.titulo}
                </h3>

                <p className="text-[#667085] font-medium mb-4 text-lg">
                  {p.descricao}
                </p>

                <div className="flex gap-2">
                  <span className="bg-[#FE5000] text-white text-sm px-4 py-1 rounded-full font-semibold">
                    {p.categoria}
                  </span>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex flex-col gap-6">
            {posts.slice(3, 5).map((p, idx) => (
              <Link
                key={idx}
                href={`/blog/${p.id}`}
                className="flex overflow-hidden flex-wrap xl:flex-nowrap items-center"
              >
                <img
                  src={p.imagem_capa}
                  alt={`${p.titulo} - thumbnail`}
                  className="w-full xl:w-2/4 h-[250px] object-cover"
                  width={224}
                  height={192}
                />

                <div className="pt-4 xl:p-4">
                  <p className="text-[#FE5000] text-base font-semibold mb-2">
                    {new Date(p.data_postagem).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <h4 className="font-semibold text-gray-900 leading-snug text-xl xl:text-lg">
                    {p.titulo}
                  </h4>

                  <p className="text-lg xl:text-base text-[#667085] font-medium my-3">
                    {p.descricao}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-16 p-5 xl:p-10">
        <div className="lg:col-span-2 space-y-8">
          {posts.slice(5, 8).map((post, idx) => (
            <Link
              key={idx}
              href={`/blog/${post.id}`}
              className="w-full xl:w-[392px]"
            >
              <div className="flex gap-8 items-center flex-wrap xl:flex-nowrap">
                <img
                  src={post.imagem_capa}
                  alt={post.titulo}
                  className="w-full xl:w-72 h-[250px] object-cover"
                />
                <div>
                  <span className="text-base text-[#FE5000] font-semibold tracking-wider uppercase">
                    {post.categoria}
                  </span>
                  <h2 className="text-2xl font-semibold text-gray-900 my-4">
                    {post.titulo}
                  </h2>
                  <p className="text-lg text-[#667085] font-medium">
                    {post.descricao}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-16">
          {/* Categorias */}
          <div>
            <h3 className="text-3xl font-semibold border-b-2 border-[#FE5000] inline-block pb-3 mb-5">
              Categorias
            </h3>
            <div className="space-y-6">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="w-full text-left py-3 px-4 rounded-md font-medium text-base 
                 bg-[#F9F9F9] border border-[#E6E6E6] text-[#232536]"
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-3xl font-semibold border-b-2 border-[#FE5000] inline-block pb-3 mb-5">
              Tags
            </h3>
            <div className="flex flex-wrap gap-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="font-medium px-8 py-2 rounded-full border border-[#E6E6E6] text-base text-[#232536] bg-[#F9F9F9]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto py-24 p-5 xl:p-10">
        <h2 className="text-3xl font-semibold mb-9">Todos os conteúdos</h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-5"
          id="cards-container"
        >
          {posts.map((p) => (
            <div key={p.id} className="w-full xl:w-[392px]">
              <a href={`/blog/${p.id}`}>
                <div className="h-60 w-full relative overflow-hidden rounded-md object-cover group-hover:scale-105 duration-300 transition-all">
                  <img
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
              </a>
            </div>
          ))}
        </div>

        <PaginationControls totalPages={totalPages} />
      </section>

      <Footer />
    </div>
  );
}

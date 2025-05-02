"use client";

import { useParams } from "next/navigation";
import DisqusComments from "../../../components/Comentarios";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function PostDetalhado() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts?id=${id}`);
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPost(data[0]);
          console.log(data);
        }
      } catch (error) {
        console.error("Erro ao buscar post:", error);
      }
    };

    if (id) fetchPost();
  }, [id]);

  if (!post) {
    return <div className="p-10">Carregando post...</div>;
  }

  const categories = [
    "Ferramentas de Medição Elétrica",
    "Ferramentas de Corte",
    "Ferramentas de Crimpagem e Conexão",
  ];

  const tagsArray = post.tags.split(",").map((tag) => tag.trim());

  return (
    <div>
      <Menu />
      <div className="max-w-7xl mx-auto p-5 xl:p-10">
        <div>
          <p className="text-[#FE5000] flex font-semibold text-xl space-x-10 py-3">
            {new Date(post?.data_postagem).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>

          <h1 className="text-4xl font-semibold">{post?.titulo}</h1>

          <p className="my-4 w-fit text-[#667085] font-medium text-xl mb-5 mt-6">
            {post?.descricao}
          </p>

          <p className="text-base bg-[#FE5000] text-white font-medium my-4 w-fit px-4 py-1 rounded-full">
            {post?.categoria}
          </p>

          <div className="h-[250px] md:h-[500px] mb-10 overflow-hidden relative mt-8">
            <Image
              src={post?.imagem_capa}
              alt="Imagem"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto pb-10 pt-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8 artigo">
            <h2>{post.texto_subtitulo}</h2>

            <p>{post.texto}</p>

            <img src={post.imagem_conteudo} alt="" />
          </div>

          <div className="space-y-16">
            {/* Tags */}
            <div>
              <h3 className="text-3xl font-semibold border-b-2 border-[#FE5000] inline-block pb-3 mb-5">
                Tags
              </h3>
              <div className="flex flex-wrap gap-4">
                {tagsArray.map((tag, index) => (
                  <span
                    key={index}
                    className="capitalize font-medium px-8 py-2 rounded-full border border-[#E6E6E6] text-base text-[#232536] bg-[#F9F9F9]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <DisqusComments
          shortname="innova-3"
          identifier={id}
          title={id}
          url={`https://n3digitalmarketing.com/${id}`}
        />

        
      </div>
      <Footer />
    </div>
  );
}

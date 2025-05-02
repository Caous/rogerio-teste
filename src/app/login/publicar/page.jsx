"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm, useFieldArray } from "react-hook-form";

export default function Publicar() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("previewPost");
    console.log("Conteúdo do previewPost bruto:", stored);
    if (stored) {
      const parsed = JSON.parse(stored);
      console.log("Objeto parseado corretamente:", parsed); // aqui sim!
      setPostData(parsed);
    }
  }, []);

  const publicar = async () => {
    try {
      console.log("Dados enviados para API:", {
        titulo: postData.titulo ?? null,
        subtitulo: postData.subtitulo ?? null,
        texto_subtitulo: postData.texto_subtitulo ?? null,
        assunto: postData.assunto ?? null,
        chamada: postData.chamada ?? null,
        descricao: postData.descricao ?? null,
        texto: postData.conteudo ?? null,
        tags: postData.tags
          ? Array.isArray(postData.tags)
            ? postData.tags.join(", ")
            : postData.tags
          : null,
        categorias: postData.categorias ?? null,
        data_publicacao: postData.data_publicacao ?? null,
        imagem_capa:
          typeof postData.imagem_capa !== "undefined"
            ? postData.imagem_capa
            : null,
        imagem_conteudo:
          typeof postData.imagem_conteudo !== "undefined"
            ? postData.imagem_conteudo
            : null,
      });
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: postData.titulo ?? null,
          subtitulo: postData.subtitulo ?? null,
          texto_subtitulo: postData.texto_subtitulo ?? null,
          assunto: postData.assunto ?? null,
          chamada: postData.chamada ?? null,
          descricao: postData.descricao ?? null,
          texto: postData.conteudo ?? null,
          tags: postData.tags
            ? Array.isArray(postData.tags)
              ? postData.tags.join(", ")
              : postData.tags
            : null,
          categorias: postData.categorias ?? null,
          data_publicacao: postData.data_publicacao ?? null,
          imagem_capa:
            typeof postData.imagem_capa !== "undefined"
              ? postData.imagem_capa
              : null,
          imagem_conteudo:
            typeof postData.imagem_conteudo !== "undefined"
              ? postData.imagem_conteudo
              : null,
        }),
      });
      alert("teste");
      const json = await res.json();
      if (res.ok) {
        alert("✅ Post publicado com sucesso!");
        localStorage.removeItem("previewPost");
        setPostData(null); // limpa tela
      } else {
        alert("❌ Erro ao publicar: " + json.error);
      }
    } catch (err) {
      alert("❌ Erro ao conectar: " + err.message);
    }
  };

  if (!postData) {
    return (
      <div className="p-10 text-center text-lg">Carregando preview...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-5 xl:p-10">
      <div className="flex justify-between mb-6">
        <Link href="/login/cms">
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Voltar a editar
          </button>
        </Link>

        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={publicar}
        >
          Publicar conteúdo
        </button>
      </div>

      <div className="py-10">
        <p className="text-[#FE5000] text-xl font-semibold mb-3">
          {postData.data_publicacao}
        </p>

        <h1 className="text-4xl font-semibold">{postData.titulo}</h1>

        <p className="text-[#667085] text-xl font-medium my-5">
          {postData.descricao}
        </p>

        <p className="text-sm bg-[#FE5000] text-white font-medium w-fit px-4 py-1 rounded-full">
          {postData.categorias}
        </p>

        <img src={postData.imagem_conteudo} alt={postData.titulo} />

        <div className="my-10 space-y-5">
          <h2 className="text-2xl font-semibold">{postData.subtitulo}</h2>
          <p>{postData.texto_subtitulo}</p>
          <p className="text-lg">{postData.conteudo}</p>
        </div>

        {/* Tags */}
        <div className="space-y-4 mt-10">
          <h3 className="text-2xl font-semibold">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {Array.isArray(postData.tags)
              ? postData.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-4 py-2 rounded-full text-base text-[#232536]"
                  >
                    {tag}
                  </span>
                ))
              : postData.tags?.split(",").map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-4 py-2 rounded-full text-base text-[#232536]"
                  >
                    {tag.trim()}
                  </span>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useFieldArray, useForm } from "react-hook-form";

export default function CMS() {
  const [coverImage, setCoverImage] = useState(null);
  const [contentImage, setContentImage] = useState(null);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [testStatus, setTestStatus] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [contentImageUrl, setContentImageUrl] = useState("");


  useEffect(() => {
    const stored = localStorage.getItem("previewPost");
    if (stored) {
      const data = JSON.parse(stored);
      setValue("titulo", data.titulo || "");
      setValue("subtitulo", data.subtitulo || "");
      setValue("texto_subtitulo", data.texto_subtitulo || "");
      setValue("assunto", data.assunto || "");
      setValue("chamada", data.chamada || "");
      setValue("descricao", data.descricao || "");
      setValue("conteudo", data.conteudo || ""); // AQUI
      setValue("categorias", data.categorias || "");
      setValue("data_publicacao", data.data_publicacao || "");

      if (Array.isArray(data.tags)) {
        setTags(data.tags);
      }
    }
  }, []);

  const handleCoverImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setCoverImage(data.url); // Salva o caminho para imagem de capa
      } else {
        console.error("Erro ao enviar imagem de capa.");
      }
    } catch (error) {
      console.error("Erro no upload da imagem de capa:", error);
    }
  };

  const handleContentImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setContentImage(data.url); // Salva o caminho para imagem de conteúdo
      } else {
        console.error("Erro ao enviar imagem de conteúdo.");
      }
    } catch (error) {
      console.error("Erro no upload da imagem de conteúdo:", error);
    }
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const {
    control,
    register,
    getValues,
    setValue, // <--- ADICIONE ISSO
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "secoes",
  });

  const appendQuestion = () => {
    append({ text: "" });
  };

  const uploadImagem = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Erro no upload da imagem.");
    return data.url; // retorna algo como /uploads/nome.jpg
  };

  const handleSubmitPost = async () => {
    const formData = {
      ...getValues(),
      tags,
      imagem_capa: coverImage, // <-- correto
      imagem_conteudo: contentImage, // <-- correto
    };

    const previewData = {
      titulo: formData.titulo,
      subtitulo: formData.subtitulo,
      texto_subtitulo: formData.texto_subtitulo, // CORRETO
      assunto: formData.assunto,
      chamada: formData.chamada,
      descricao: formData.descricao,
      conteudo: formData.conteudo, // CORRETO
      tags: tags,
      categorias: formData.categorias,
      data_publicacao: formData.data_publicacao,
      imagem_capa: coverImage,
      imagem_conteudo: contentImage,
    };

    localStorage.setItem("previewPost", JSON.stringify(previewData));
    router.push("/login/publicar");
  };

  const handlePreview = () => {
    const data = {
      titulo: watch("titulo"),
      subtitulo: watch("subtitulo"),
      texto_subtitulo: watch("texto_subtitulo"),
      assunto: watch("assunto"),
      chamada: watch("chamada"),
      descricao: watch("descricao"),
      conteudo: watch("conteudo"),
      tags: tags.join(", "),
      categorias: watch("categorias"),
      data_publicacao: watch("data_publicacao"),
      imagem_capa: coverImage,
      imagem_conteudo: contentImage,
    };

    localStorage.setItem("previewPost", JSON.stringify(data));
  };


  return (
    <div className="min-h-screen bg-gray-50 p-5 xl:p-10">
      <div className="flex justify-between mb-6">
        <Link href="/login">
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Sair da conta
          </button>
        </Link>

        <Link href="/login/desativar">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Desativar postagens
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Informações */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Informações</h2>

          <label className="block text-base font-medium mb-3">
            Título da postagem
          </label>
          <input
            {...register("titulo")}
            type="text"
            placeholder="Título"
            className="w-full border border-[#D4D7E3] bg-gray-100 text-[#232536] rounded p-2 mb-4"
            required />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-base font-medium mb-3">
                Data de publicação
              </label>
              <input type="date" {...register("data_publicacao")} className="w-full border border-[#D4D7E3] bg-gray-100 text-[#232536] rounded p-2" required />
            </div>
            <div>
              <label className="block text-base font-medium mb-3">Tags</label>
              <input
                type="text"
                className="w-full border border-[#D4D7E3] bg-gray-100 text-[#232536] rounded p-2 mb-2"
                placeholder="Digite uma tag e pressione Enter"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
              />
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-1 rounded text-base">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <label className="block text-base font-medium mb-3">Categorias</label>
          <div className="relative w-full mb-4">
            <select {...register("categorias")} className="w-full appearance-none border border-[#D4D7E3] bg-gray-100 text-[#232536] rounded p-2 pr-10 mb-4">
              <option value="Ferramentas de Corte">Ferramentas de Corte</option>
              <option value="Ferramentas de Medição Elétrica">
                Ferramentas de Medição Elétrica
              </option>
              <option value="Ferramentas de Crimpagem e Conexão">
                Ferramentas de Crimpagem e Conexão
              </option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <label className="block text-base font-medium mb-3">Assunto</label>
          <input
            {...register("assunto")}
            type="text"
            placeholder="Assunto"
            className="w-full border border-[#D4D7E3] bg-gray-100 text-[#232536] rounded p-2 mb-4"
            required
          />

          <label className="block text-base font-medium mb-3">Chamada</label>
          <input
            {...register("chamada")}
            type="text"
            placeholder="Chamada"
            className="w-full border border-[#D4D7E3] bg-gray-100 text-[#232536] rounded p-2 mb-4"
            required
          />

          <label className="block text-base font-medium mb-3">Descrição</label>
          <textarea {...register("descricao")} className="w-full border border-[#D4D7E3] bg-gray-100 text-[#232536] rounded p-2 mb-4" rows="5" required />


          <label className="block text-base font-medium mb-3">Capa da postagem</label>
          <input type="file" accept="image/*" onChange={handleCoverImageChange} className="mb-4" />
          {coverImage && <img src={coverImage} alt="Capa da postagem" className="rounded-lg w-full h-40 object-cover" />}
        </div>

        {/* Conteúdos */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Conteúdos</h2>

          <label className="block text-base font-medium mb-3">Subtítulo</label>
          <input{...register("texto_subtitulo")} className="w-full border border-[#D4D7E3] bg-gray-100 text-[#232536] rounded p-2 mb-4" required />

          <label className="block text-base font-medium mb-3">Texto</label>
          <textarea {...register("conteudo")} className="w-full border border-[#D4D7E3] bg-gray-100 text-[#232536] rounded p-2 mb-4" rows="6" required />

          <label className="block text-base font-medium mb-3">Imagem</label>
          <input type="file" accept="image/*" onChange={handleContentImageChange} className="mb-4" />
          {contentImage && <img src={contentImage} alt="Imagem do conteúdo" className="rounded-lg w-full h-40 object-cover" />}


          <div className="mt-6">
            <form>
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              {fields.map((question, index) => (
                <div key={question.id}>
                  <label className="block text-base font-medium mb-3">
                    Texto (Seção {index + 2})
                  </label>

                  <textarea
                    {...register(`secoes${index}.text`, { required: true })}
                    defaultValue=""
                    className="w-full border border-[#D4D7E3] bg-gray-100 text-[#232536] rounded p-2 mb-4"
                    rows="6"
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="bg-red-600 text-white px-4 py-2 rounded mt-3 mb-7"
                  >
                    Remove seção
                  </button>
                </div>
              ))}
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                type="button"
                onClick={appendQuestion}
              >
                Adicionar mais texto
              </button>
            </form>

            <Link href="/login/publicar">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded mt-6"
                onClick={handleSubmitPost}
              >
                Revisar e publicar
              </button>
            </Link>



            {testStatus && <p className="mt-3 text-sm">{testStatus}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

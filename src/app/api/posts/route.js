import { getConnection } from "../connection/mysqlConnection";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const titulo = searchParams.get("titulo");
  const assunto = searchParams.get("assunto");
  const categoria = searchParams.get("categoria");
  const tag = searchParams.get("tag");

  try {
    const connection = await getConnection();
    let query = "SELECT * FROM posts WHERE ativo = 1";
    const params = [];

    if (id) {
      query += " AND id = ?";
      params.push(id);
    }
    if (titulo) {
      query += " AND titulo LIKE ?";
      params.push(`%${titulo}%`);
    }
    if (assunto) {
      query += " AND assunto LIKE ?";
      params.push(`%${assunto}%`);
    }
    if (categoria) {
      query += " AND categoria LIKE ?";
      params.push(`%${categoria}%`);
    }
    if (tag) {
      query += " AND tags LIKE ?";
      params.push(`%${tag}%`);
    }

    query += " ORDER BY data_postagem DESC";

    const [rows] = await connection.execute(query, params);
    await connection.end();

    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("📦 Body recebido:", body);

    const {
      titulo,
      subtitulo,
      texto_subtitulo,
      assunto,
      chamada,
      descricao,
      texto, // <- recebido do frontend
      tags,
      categorias,
      data_publicacao,
      imagem_capa,
      imagem_conteudo
    } = body;

    const values = [
      titulo ?? null,
      subtitulo ?? null,
      texto_subtitulo ?? null,
      assunto ?? null,
      chamada ?? null,
      descricao ?? null,
      texto ?? null, // <- aqui você pode usar conteudo, MAS o SQL precisa referenciar "texto"
      tags ?? null,
      categorias ?? null,
      data_publicacao ?? null,
      imagem_capa ?? null,
      imagem_conteudo ?? null
    ];


    // Debug para cada campo
    values.forEach((v, i) => {
      console.log(`🔍 Campo ${i + 1}:`, v, typeof v);
    });

    if (values.includes(undefined)) {
      console.error("❌ Algum campo está undefined!", values);
      return new Response(JSON.stringify({ error: "Um ou mais campos estão indefinidos." }), { status: 400 });
    }

    const query = `
    INSERT INTO posts (
      titulo, subtitulo, texto_subtitulo, assunto,
      chamada, descricao, texto, tags,
      categoria, data_postagem, imagem_capa, imagem_conteudo
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

    const connection = await getConnection();
    const [result] = await connection.execute(query, values);
    await connection.end();

    return new Response(JSON.stringify({ message: "Post criado", id: result.insertId }), { status: 201 });

  } catch (error) {
    console.error("❌ Erro interno na rota /api/posts:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
export async function PUT(request) {
  const data = await request.json();
  const {
    titulo, subtitulo, texto_subtitulo, assunto, chamada,
    descricao, conteudo, tags, categorias, data_publicacao,
    imagem_capa = null, imagem_conteudo = null
  } = data;

  try {
    const connection = await getConnection();
    await connection.execute(
      `UPDATE posts SET
        titulo = ?, subtitulo = ?, texto_subtitulo = ?, assunto = ?, chamada = ?,
        descricao = ?, conteudo = ?, tags = ?, categorias = ?, data_publicacao = ?,
        imagem_capa = ?, imagem_conteudo = ?
      WHERE id = ?`,
      [
        titulo, subtitulo, texto_subtitulo, assunto, chamada,
        descricao, conteudo, tags, categorias, data_publicacao,
        imagem_capa, imagem_conteudo, id
      ]
    );
    await connection.end();

    return new Response(JSON.stringify({ success: true, message: "Post atualizado com sucesso." }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "ID é obrigatório para exclusão." }), {
      status: 400,
    });
  }

  try {
    const connection = await getConnection();
    await connection.execute("DELETE FROM posts WHERE id = ?", [id]);
    await connection.end();

    return new Response(JSON.stringify({ success: true, message: "Post excluído com sucesso." }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function PATCH(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "ID é obrigatório para desativar." }), {
      status: 400,
    });
  }

  try {
    const connection = await getConnection();
    await connection.execute(
      "UPDATE posts SET ativo = 0, data_desativacao = NOW() WHERE id = ?",
      [id]
    );
    await connection.end();

    return new Response(JSON.stringify({ success: true, message: "Post desativado com sucesso." }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

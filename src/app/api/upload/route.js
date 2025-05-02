import formidable from "formidable";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

// Torna a rota dinâmica e sem cache
export const dynamic = 'force-dynamic';

// Função para transformar um Request (Web API) em um Readable Stream (Node.js)
function toNodeReadableStream(webRequest) {
  const reader = webRequest.body.getReader();
  return new Readable({
    async read() {
      const { done, value } = await reader.read();
      if (done) return this.push(null);
      this.push(value);
    }
  });
}

export async function POST(req) {
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const form = formidable({
    uploadDir: uploadDir,
    keepExtensions: true,
    multiples: false,
    filename: (name, ext, part) => {
      const timestamp = Date.now();
      const originalName = part.originalFilename || "file";
      const extension = path.extname(originalName); 
      const baseName = path.basename(originalName, extension)
        .replace(/\s+/g, "_")
        .replace(/[^\w.-]/gi, "");
    
      return `${timestamp}_${baseName}${extension}`;
    }
  });

  const stream = toNodeReadableStream(req);

  const nodeReq = Object.assign(stream, {
    headers: Object.fromEntries(req.headers),
    method: req.method,
    url: req.url,
  });

  return new Promise((resolve, reject) => {
    form.parse(nodeReq, (err, fields, files) => {
      if (err) {
        console.error("❌ Erro ao fazer upload:", err);
        return reject(new Response(JSON.stringify({ error: "Erro no upload" }), { status: 500 }));
      }

      const file = files.file?.[0];
      if (!file) {
        return resolve(new Response(JSON.stringify({ error: "Arquivo não encontrado" }), { status: 400 }));
      }

      const publicUrl = `/uploads/${path.basename(file.filepath)}`;
      return resolve(new Response(JSON.stringify({ success: true, url: publicUrl }), { status: 200 }));
    });
  });
}

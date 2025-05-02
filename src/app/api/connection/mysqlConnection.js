import mysql from "mysql2/promise";

export async function getConnection() {
  return await mysql.createConnection({
        host: "br936.hostgator.com.br",
        port: 3306,
        user: "roge5867_n3Blog",
        password: "8f&N616b\"G",
        database: "roge5867_blog_db",
        charset: "utf8mb4",
  });
}

export async function testConnection() {
  try {
    const connection = await getConnection();
    await connection.ping();
    await connection.end();

    return {
      success: true,
      message: "Conexão bem-sucedida!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Erro ao conectar ao banco.",
      error: error.message,
    };
  }
}

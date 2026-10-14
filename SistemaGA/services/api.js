import fs from 'fs';

export const importarDados = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const caminhoArquivo = new URL('../data/dados.json', import.meta.url);
        const data = fs.readFileSync(caminhoArquivo, 'utf-8');
        const alunosParseados = JSON.parse(data);
        resolve(alunosParseados);
      } catch (error) {
        console.error("Erro detalhado na leitura do JSON:", error.message);
        reject(new Error(`Falha ao ler os dados JSON (${error.message})`));
      }
    }, 1000);
  });
};

export const sincronizarNotas = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve("Sincronização concluída com sucesso!") : reject("Serviço indisponível.");
    }, 500);
  });
};
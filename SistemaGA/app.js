import { importarDados, sincronizarNotas } from './services/api.js';
import { calcularDesempenho, gerarRanking } from './services/processamento.js';
import { identificarSituacaoTurma } from './services/validacao.js';
import { monitorarSincronizacao } from './utils/temporizador.js';

const iniciarApp = async () => {
  try {
    console.log("A iniciar Sistema de Gestão Académica...");
    const dadosBrutos = await importarDados();
    const alunosProcessados = dadosBrutos.map(calcularDesempenho);
    const ranking = gerarRanking(alunosProcessados);
    console.log(`\n--- RANKING GERAL ---`);
    ranking.forEach((aluno, index) => {
      console.log(`${index + 1}º - ${aluno.nome} (Média: ${aluno.mediaGeral})`);
    });

    const situacaoTurma = identificarSituacaoTurma(alunosProcessados);
    console.log(`\n--- SITUAÇÃO DA TURMA ---`);
    console.log(`Existe reprovado? ${situacaoTurma.existeReprovado ? 'Sim' : 'Não'}`);
    console.log(`Existe recuperação? ${situacaoTurma.existeRecuperacao ? 'Sim' : 'Não'}`);
    console.log(`Todos foram avaliados? ${situacaoTurma.todosAvaliados ? 'Sim' : 'Não'}`);

    try {
      const msgSincronizacao = await sincronizarNotas();
      console.log(`\nStatus do Servidor: ${msgSincronizacao}`);
    } catch (err) {
      console.log(`\nStatus do Servidor: Falha - ${err}`);
    }
    monitorarSincronizacao(3);

  } catch (erro) {
    console.error("Erro crítico na aplicação:", erro);
  }
};

iniciarApp();
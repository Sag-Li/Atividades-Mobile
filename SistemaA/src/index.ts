import type { Aluno, DesempenhoDisciplinas } from "./types/AlunosTypes";
import repositoryModule = require("./repositories/Repository");
import calculosModule = require("./utils/calculos");

const repositorioAlunos = new repositoryModule<Aluno>();
const novoAluno: Aluno = {
  matricula: "2023001",
  nome: "João Silva",
  idade: 20,
  curso: "Sistemas de Informação",
  turma: "SI-3A",
  situacaoAcademica: "ativo",
  notas: [8, 9, 7],
  frequencias: [true, true, false, true]
};

repositorioAlunos.adicionar(novoAluno);
console.log(repositorioAlunos.obterTodos());

const desempenhoJoao: DesempenhoDisciplinas = {
  matematica: 8.5,
  portugues: 7.2,
  historia: 9.0
};

const mediaFinal = calculosModule.calcularMediaGeral(desempenhoJoao);
console.log(`A média geral do João é: ${mediaFinal.toFixed(2)}`);
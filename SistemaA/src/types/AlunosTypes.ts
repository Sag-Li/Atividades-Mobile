export type SituacaoAcademica = "ativo" | "trancado" | "concluido" | "cancelado";

export type ResultadoFinal = [number, number, string];

export interface Aluno {
  readonly matricula: string;
  nome: string;
  idade: number;
  curso: string;
  turma: string;
  situacaoAcademica: SituacaoAcademica;
  notas: number[];
  frequencias: boolean[];
}

export type AtualizarAluno = Partial<Omit<Aluno, "matricula">>;
export type VisaoAdministrativa = Pick<Aluno, "matricula" | "nome" | "curso" | "turma" | "situacaoAcademica">;
export type VisaoPublica = Pick<Aluno, "nome" | "curso" | "turma">;
export type DesempenhoDisciplinas = Record<string, number>;
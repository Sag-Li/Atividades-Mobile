export const identificarSituacaoTurma = (alunosProcessados) => {
  const todasDisciplinas = alunosProcessados.flatMap(a => a.disciplinas);
  
  const existeReprovado = todasDisciplinas.some(d => d.situacao === "REPROVADO");
  const existeRecuperacao = todasDisciplinas.some(d => d.situacao === "RECUPERAÇÃO");
  const todosAvaliados = alunosProcessados.every(a => a.disciplinas.length > 0); 
  
  return { existeReprovado, existeRecuperacao, todosAvaliados };
};
import type { DesempenhoDisciplinas } from "../types/AlunosTypes";

const calcularMediaGeral = (desempenho: DesempenhoDisciplinas): number => {
  const notas = Object.values(desempenho);
  if (notas.length === 0) return 0;
  
  const total = notas.reduce((acc, nota) => acc + nota, 0);
  return total / notas.length;
};

export = { calcularMediaGeral };
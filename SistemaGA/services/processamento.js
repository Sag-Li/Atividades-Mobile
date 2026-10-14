export const calcularDesempenho = (aluno) => {
  const disciplinasProcessadas = aluno.disciplinas.map(disc => {
    const total = disc.notas.reduce((acc, nota) => acc + nota, 0);
    const media = total / disc.notas.length;
    
    let situacao = "REPROVADO";
    if (media >= 7) situacao = "APROVADO";
    else if (media >= 5) situacao = "RECUPERAÇÃO";

    return { ...disc, media: media.toFixed(2), situacao };
  });

  const mediaGeral = disciplinasProcessadas.reduce((acc, disc) => acc + parseFloat(disc.media), 0) / disciplinasProcessadas.length;

  return {
    nome: aluno.nome,
    disciplinas: disciplinasProcessadas,
    mediaGeral: mediaGeral.toFixed(2),
    maiorNota: Math.max(...aluno.disciplinas.flatMap(d => d.notas)), 
    menorNota: Math.min(...aluno.disciplinas.flatMap(d => d.notas))
  };
};

export const gerarRanking = (alunosProcessados) => {
  return [...alunosProcessados].sort((a, b) => b.mediaGeral - a.mediaGeral);
};
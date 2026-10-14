interface Identificavel {
  matricula?: string;
  id?: string;
}

class Repository<T extends Identificavel> {
  private itens: T[] = [];

  adicionar(item: T): void {
    this.itens.push(item);
  }

  obterTodos(): T[] {
    return this.itens;
  }

  atualizar(idOuMatricula: string, dadosAtualizados: Partial<T>): void {
    const index = this.itens.findIndex(i => i.matricula === idOuMatricula || i.id === idOuMatricula);
    if (index !== -1) {
      this.itens[index] = { ...this.itens[index], ...dadosAtualizados } as T;
    }
  }
}

export = Repository;
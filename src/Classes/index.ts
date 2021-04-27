// Forma curta
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

// Forma longa
export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly CNPJ: string;

  constructor(nome: string, CNPJ: string) {
    this.nome = nome;
    this.CNPJ = CNPJ;
  }

  public setColaboradores(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

const empresa1 = new Empresa('Udemy', '123');

const colaborador1 = new Colaborador('Paulo', 'Souza');
const colaborador2 = new Colaborador('Henrique', 'Silva');

empresa1.setColaboradores(colaborador1);
empresa1.setColaboradores(colaborador2);

console.log(empresa1);

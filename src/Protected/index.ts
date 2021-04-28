export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

export class Empresa {
  protected readonly colaboradores: Colaborador[] = [];

  constructor(public readonly nome: string, private readonly CNPJ: string) {}

  public setColaboradores(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '123');
  }

  public popColoborador = (): Colaborador | null =>
    this.colaboradores.pop() || null;
}

const udemy = new Udemy();

const colaborador1 = new Colaborador('Paulo', 'Souza');
const colaborador2 = new Colaborador('Henrique', 'Silva');

udemy.setColaboradores(colaborador1);
udemy.setColaboradores(colaborador2);

console.log(udemy);
console.log(udemy.popColoborador());

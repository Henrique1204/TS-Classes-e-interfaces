export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {
    // Tem gente que usa assim:
    this.cpf = _cpf;
  }

  public get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  public set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const pessoa = new Pessoa('Paulo', 'Silva', 19, '510.000.222-11');
pessoa.cpf = '510.000.222-11';
console.log(pessoa.cpf);

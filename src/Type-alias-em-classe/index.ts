type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  public nomeCompleto = (): string => `${this.nome} ${this.sobrenome}`;
}

const paulo = new Pessoa('Paulo', 'Souza');

console.log(paulo.nomeCompleto());

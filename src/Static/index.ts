// Coisas statics não precisam de instância para serem acessados e não são acessados por meio de instância.
export class Pessoa {
  public static idadePadrao = 0;
  public static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public _cpf: string
  ) {}

  // Forma de acessar uma atributo static por meio de instância.
  public metodoNormal(): void {
    console.log(`IDADE PADRÃO: ${Pessoa.idadePadrao}`);
    console.log(`CPF PADRÃO: ${Pessoa.cpfPadrao}`);
  }

  public static criarPessoa = (nome: string, sobrenome: string): Pessoa =>
    new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
}

console.log(Pessoa.criarPessoa('Paulo', 'Souza'));
console.log(Pessoa.cpfPadrao, Pessoa.cpfPadrao);

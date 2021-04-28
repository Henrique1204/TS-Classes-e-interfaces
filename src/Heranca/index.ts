export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  public getIdade = (): number => this.idade;
  public getCpf = (): string => this.cpf;
  public getNomeCompleto = (): string => `${this.nome} ${this.sobrenome}`;
}

export class Aluno extends Pessoa {
  public sala: string;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    sala: string
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  public getNomeCompleto = (): string => `Aluno ${super.getNomeCompleto()}`;
}

export class Cliente extends Pessoa {
  public getNomeCompleto = (): string => `Cliente: ${super.getNomeCompleto()}`;
}

const pessoa = new Pessoa('Paulo', 'Souza', 19, '510');
const aluno = new Aluno('Henrique', 'Silva', 19, '510', '10');
const cliente = new Cliente('Silva', 'Souza', 19, '510');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());

// Declaration merging une o conteúdo de duas interfaces com o mesmo nome.
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly endereco: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Paulo',
  sobrenome: 'Souza',
  endereco: ['Av. Primavera', '107'],
};

// pessoa.endereco.push('Vargem Grande'); // readonly na chave da propriedade não previne isso.
// pessoa.endereco.push('Vargem Grande'); // readonly no tipo da propriedade previne isso.

console.log(pessoa);

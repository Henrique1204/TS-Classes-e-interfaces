export class Produto {
  constructor(private _nome: string, private _preco: number) {}

  public get nome(): string {
    return this._nome;
  }

  public get preco(): number {
    return this._preco;
  }
}

export class CarrinhoDeCompras {
  private produtos: Produto[] = [];

  public inserirProdutos(...produtos: Produto[]): void {
    produtos.forEach((produto) => this.produtos.push(produto));
  }

  public quantidade = (): number => this.produtos.length;

  public total = (): number =>
    this.produtos.reduce((acc, { preco }) => acc + preco, 0);
}

const camiseta = new Produto('Camiseta P', 49.9);
const calca = new Produto('Calça 38', 70);
const sapato = new Produto('Nike', 250);

const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProdutos(camiseta, calca, sapato);
console.log(carrinhoDeCompras.quantidade());
console.log(carrinhoDeCompras.total());

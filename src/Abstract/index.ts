export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}

  public atacar(inimigo: Personagem): void {
    this.bordao();
    inimigo.receberDano(this.ataque);
  }

  public receberDano(dano: number): void {
    this.vida -= dano;
    console.log(`VIDA DE ${this.nome} DESCEU PARA ${this.vida}`);
  }

  public abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = 'Guerreira';

  public bordao(): void {
    console.log('GUERRREIIIRRAAA AO ATAQUE!');
  }
}

export class Monstro extends Personagem {
  protected emoji = 'Monstro';

  public bordao(): void {
    console.log('URRRRROOOOOOOOO');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);

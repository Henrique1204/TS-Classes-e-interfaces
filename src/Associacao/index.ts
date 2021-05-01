export abstract class Ferramenta {
  constructor(private _nome: string) {}

  public abstract escrever(): void;

  public get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  public escrever(): void {
    console.log(`Escrevendo de caneta: ${this.nome}`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  public escrever(): void {
    console.log(`Digitando na máquina: ${this.nome}`);
  }
}

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  public get nome(): string {
    return this._nome;
  }

  public get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  public set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  public escrever(): void {
    if (this.ferramenta) this.ferramenta.escrever();
    else console.log('Escritor escrevendo...');
  }
}

const escritor = new Escritor('Paulo');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('hp');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquinaEscrever.nome);

// escritor.ferramenta = caneta; // Escreve com canete
// escritor.ferramenta = maquinaEscrever; // Escreve com máquina
// escritor.escrever(); // Escreve sozino
